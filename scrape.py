#!/usr/bin/env python

import re
from bs4 import BeautifulSoup
from requests import get
from multiprocessing.dummy import Pool
from collections import OrderedDict
base_url = "http://support.screeps.com"

response = get(base_url + "/hc/en-us/articles/203084991-API-Reference")
response.raise_for_status()
b = BeautifulSoup(response.text, "html.parser")

# Load constants


# Load other classes
RE_PROTO_DEF = re.compile(r".*<a.*")

def write_prototype(prototype):
    print(prototype.text, prototype["href"])
    response = get(base_url + prototype["href"])
    response.raise_for_status()
    soup = BeautifulSoup(response.text.replace("\r", ""), "html.parser")
    class_name = soup.find("h1").text.strip()
    with open(class_name + ".js", "w") as attr_file:
        attr_file.write("/*\n * @constructor\n")
        proto_chain = soup.find("h4", string="Prototype chain")
        base_class = None
        if proto_chain:
            proto_chain = proto_chain.find_next_sibling("table")
            if proto_chain:
                parsed_chain = [
                    td.find("code").text
                    for td in proto_chain.find_all("td")
                    if td.find("a")
                ]
                base_class = parsed_chain[-1].strip()
        if base_class:
            attr_file.write(" * @augments {}\n".format(base_class))
        attr_file.write("*/\n")
        attr_file.write("var {} = function () {{}}\n".format(class_name))
        if base_class:
            attr_file.write("{}.prototype = Object.create({}.prototype);\n".format(base_class, class_name))
        attr_file.write("{}.prototype = {{\n".format(class_name))
        for add_space, attr in enumerate(soup.find_all("div", {"class": "api-block-template"})):
            attr_name = attr.find("div", {"class": "api-name"}).text.strip()
            if add_space:
                attr_file.write("\n")
            attr_file.write("    /**\n")
            attr_file.write("     * {}\n".format(attr.find("div", {"class": "api-desc"}).text.strip().replace("\n", " ")))
            try:
                attr_file.write("     * @type {}\n".format(attr.find("div", {"class": "api-type"}).text.strip()))
                attr_body = "null"
            except AttributeError:
                # This is not an attribute... must be a function.
                attr_body = "function () {}"
                active_param = None
                param_cache = OrderedDict()
                args_container = attr.find("div", {"class": "api-args"})
                if args_container:
                    for div in args_container.find_all("div"):
                        if div["class"][0] == "api-arg-title":
                            active_param = div.text.strip()
                            param_cache[active_param] = {"title": active_param}
                        else:
                            param_cache[active_param][div["class"][0].split("-")[-1]] = div.text.strip()
                    for param in param_cache.values():
                        desc = param.get("desc", "object")
                        title = param.get("title", "IDUNNOLOL")
                        type = param.get("type", "object")

                        if "(optional)" in title:
                            title = "[{}]".format(title.replace("(optional)", "").strip())
                        attr_file.write("     * @param {{{}}} {} - {}\n".format(type, title, desc))
                    return_type = "object"

                    attr_file.write("     * @return {{{}}}\n".format(return_type))
                else:
                    # No arguments to function
                    pass
                # attr_file.write("     * ({}) {}\n".format("object", param.name))

            attr_file.write("     */\n")
            attr_file.write("    {}: {},\n".format(attr_name, attr_body))
        attr_file.write("}");
        return prototype.text

print("\n".join(write_prototype(a) or a for a in b.find("table").find_all("a")))

