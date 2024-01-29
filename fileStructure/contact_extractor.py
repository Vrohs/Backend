# Vivek Rohtasvi: +91 9810118351
# John Doe: +91 9876543210
# XYZ: +91 9999999999


import re
s = "Vivek Rohtasvi: +91 9810118351"
name = re.findall(r'[A-Z][a-z]*', s)
phone = re.findall(r'\d{10}', s)
print(name)
print(phone)
