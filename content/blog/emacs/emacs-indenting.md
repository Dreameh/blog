---
title: Emacs Indenting
date: 2018-10-14 00:00:00
category: 'emacs'
---



Ever since I started using Emacs, there has always been a thorn in my behind.
The Indentation.

The config which seems to be the default is that there is **8 spaces** and that is way too much
for any kind of editor in 2018. And when I have tried to change that, it seems like there are not
only one setting you need to change, but also changing it with the different **major modes**.

I had to change C and Python for now, but in the future, I will most likely have to change more.
This should change that:

```
(setq-default indent-tabs-mode nil)
(setq tab-width 4)
```

This changes the indentation mode to spaces instead of tabs.

You can also change the language-mode specific ones like this:

```
(defvaralias 'python-indent-offset 'tab-width)
```

But if you do like this, you will need to adjust the tab-width through it's variable.
