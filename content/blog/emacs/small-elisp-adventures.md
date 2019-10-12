---
title: Small ELisp Adventures
date: 2019-02-03 00:00:00
category: 'emacs'
---

Hello there, it's been a while, one cannot possibly understand how often something changes
over the course of just a couple of months.

I say this as with what I have been doing, much has been learning new things every day in order
to keep myself occupied and trying to understand new concepts as I try to grow as
a software engineer student.

Emacs makes this easier than what I would say most editors do, mainly due to the fact that I
can use org-mode and have a sort of polyglot environment of adding snippets of code to
a ton of text which is relevant only if the code itself is seen.

I figured that with emacs, I can be lazy, because lazy is good, that means that I need to figure
out a nifty way of automating or just a keypress in order to take up what I want

That's essentially what I did, but in a very small scale of course.

```
(defun dreameh/config ()
  "Config function to later keybind it to C-c C-c"
  (interactive)
  (switch-to-buffer-other-window "*config*")
  (erase-buffer)
  (find-file "~/.emacs.d/settings/general.org")
  (other-window 1))

(global-set-key (kbd "C-c C-c") 'dreameh/config)
```

This elisp above is a interesting yet very simple function. If you look at it, it's very
human readable, it's really understandable what it does, not only because it's simple
but that's how elisp works.

So let's start breaking down what this piece of code does.

```
(defun dreameh/config ())
```

To define a function, you use defun **name** and then add the parameter you want it to have.
pretty straight forward, just like a regular function.

```
(interactive)
```

This makes it so that you are able to call it as a keybinding, there's a lot more to it,
but for this code, that's the only thing you will need to know.

```
(switch-to-buffer-other-window "*config*")
```

It's always a good idea to understand how emacs does it, and with this function, you will
switch to a new buffer in a new window with the buffer name of **config**

```
(erase-buffer)
```

So in hindsight, this might not be something I actually need, as I am moving to a new buffer,
but if I were to switch to a random buffer and it has something in it, then erasing that buffer
will be a good thing to do.

```
(find-file "~/.emacs.d/settings/general.org")
```

So with **C-x C-f** you have find-file, you can use that command with elisp to go to the file
you are currently searching for and for this, it will be my configuration path.

```
(other-window 1)
```

This essentially makes your other-window the active window where your cursor will be in.
it's the same as using the keybind of **C-x o**.

Now with the function being defined, I can now call it, either by using **M-x** or I can
set a custom keybinding for it with:

```
(global-set-key (kbd "C-c C-c") 'dreameh/config)
```

And that would be the latest adventure in the world of emacs using elisp.
