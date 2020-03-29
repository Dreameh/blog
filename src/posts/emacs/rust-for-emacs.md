---
title: Rust for Emacs
date: 2020-30-03
category: 'emacs'
path: "/blog/rust-emacs"
---

Today I added rust support to my emacs config. And how it has been
before is that I used **emacs-racer** which might or might not have
worked most of the times, mostly due to the sheer fact that you had to
use the nightly toolchain of rust in order to build racer.

But that surely changed as I found out that there's another package
out there waiting for me to install it.

The package is called [Rustic](https://github.com/brotzeit/rustic) and
it is so easy to install, or well, it's much easier and is not prone
to breaking everytime you try to install it.

So to begin you will need either **rls** or **rust-analyzer**
for **rls** all you need to do is to install the cargo like this:
```bash
cargo install rls
```

and then you are good to go with the packages needed.
if you wanna go and install **rust-analyzer** you can always check if
there's a simple binary to download with the distro you are using or
if you wanna build it from source, you can go
[here](https://rust-analyzer.github.io/manual.html#installation) and
follow the instructions given there.

Since you now have all the pre-requisite packages needed, it's time to
go for the emacs config needed.

I suggest you add **lsp**, **company** and **flycheck** at first to
the list of packages you need in emacs, and then if you use
**use-package** all you need afterwards is to add this to your config:
```lisp
(use-package flycheck-rust)

(use-package rustic
  :hook
  (rust-mode . lsp-deferred)
  (rust-mode . company-mode)
  (flycheck-mode . flycheck-rust-setup)
  :custom
  (rustic-format-on-save t)
  (rustic-indent-method-chain t)
  ;; The default is 'rls
  (rustic-lsp-server 'rust-analyzer))

```

You should note that I use **straight.el** and your config might need
a **:ensure** macro as well as **:demand** in order for the config to
work. You might also wanna set the hook to use **lsp** instead of
**lsp-deferred** as my current config defers everything as per default.

if you have followed this, all the way through, you should now be able
to do some rust magic and therefore use it without a problem.

[Rustic](https://github.com/brotzeit/rustic#installation) has a pretty
detailed list of functions you can use to your disposal while in rust land.

