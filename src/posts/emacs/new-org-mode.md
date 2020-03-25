---
title: Org Mode
date: 2020-03-26
category: 'emacs'
path: "/blog/org-mode-92"
---

The clock nears midnight, a sweaty emacs user is sitting in a darkly
room with only the monitors lighting up the space.

To his amusement he finds out that the version of **Org-mode** he is
using is **9.3.6** and his emacs version reaches the high number of
**28.0.50** not even a beta version yet.

With the version of **Org-mode** he is currently using, some things
seems to have deprecated, such as the fast *< s TAB* a favorite among
the things he liked about **Org-mode**.

Later on he finds out that the **org-structure-template-alist** has
now been revamped, which means he will now have to use another way of
enabling it.

Here's what you will have to do:

1. require *org-tempo*
2. change the list items to be *("el" . "src emacs-lisp")*

And for the newly arrived **Emacser**:
```lisp
(require 'org-tempo)
(add-to-list 'org-structure-template-alist '("el" . "src emacs-lisp"))
```

These lines can easily be added within the **:config** macro in
use-package.

