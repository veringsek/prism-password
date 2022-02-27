# Prism Password

English [中文](README.zh.md)

Prism Password is a new kind of dynamic password. 

⚠ **Please note that this is a concept demo to show how a Prism Password could work. It's not well tested for its robustness, safety and security. It is considered dangerous to use this demo in serious scenarios.**

## Concept

Although not directly metioned in the paper, in [An Inference-based CAPTCHA Against Pattern Recognition](https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/ccd=6dDp2g/record?r1=1&h1=0), the determination of human identity is changed from a traditional way of "s/he can recognize something", to a new approach of "s/he knows how to process something". To "recognize something" includes to recognize text, to recognize image content, to recognize math equations, etc. To "know how to process something" includes to know how to calculate a math equation, and to know how to make inference. 

Password is a determination of owner identity. The traditional concept of this determination is "s/he acknowledges something", where to "acknowledge something" means to remember a string or a PIN code. What if the determination of owner identity is changed to "s/he knows how to process something"?

Prism Password determines owner identity by "s/he knows how to turn a given string to another", where the "how" is previously given by the owner to a Prism Password system. 

For a simple example, when signing up, a user can set its Prism Password to *first two digits of source times last two digits of source*, so when signing in, after the Prism Password system gives a random source string, let's say `529930`, the user has to process the string according to the rule s/he set as her/his Prism Password, in this case, the source `529930` must be converted to $52 \times 30 = 1560$, therefore, `1560` is the correct password for this sign-in.

## Why

There are plenty of cases where input passwords could be known by other people, including some techy scenarios like Man-In-The-Middle attack and keystroke logging, as well as some casual scenarios like someone physically behind. 

If the password constantly changes, the leaked password will be useless since the password then is not the password now. And this is why One-Time Password, a kind of dynamic password, was invented.

## Use Case

## Vulnerability

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright © 2022, veringsek