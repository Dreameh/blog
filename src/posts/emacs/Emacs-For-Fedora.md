---
title: Emacs Installation on Fedora 30/31/Rawhide
date: 2019-10-02 00:00:00
category: 'emacs'
path: "/blog/emacs-26"
---
 Installing Emacs through the official channels is very easy,
  however, with the recent problem that a lot of Emacs users were
  suddenly facing not being able to use package.el to download their packages.

  The problem seemed to have come with gnutls that were higher or
  equals to version 3.6, the workaround was supposed to be:
  ```lisp
  (setq gnutls-algorithm-priority "NORMAL:-VERS-TLS1.3")
  ```
  However for some reason, no matter what, I couldn't get it fixed,
  and this was with a newly installed version of Emacs 26.2-1.fc30 and
  Emacs 26.2-2.fc31 on Fedora 30/31 so this was a big problem, because
  I just recently had gotten used to using Fedora and Gnome, and I
  thought I would never get a solution that felt easy enough.

  That was obviously until I remembered that I could just install it
  directly from the source code, and so I did, I installed Emacs 26.3
  and it worked wonderfully, so I wanted to share how to do it in a
  few simple steps which you can find below.

  **NOTE:** You can insert all the steps into a bash file and then run the
  file, for a faster install.

  ```bash
  # Dependencies for development
  sudo dnf group install "Development Tools"
  # Dependencies specific to emacs
  sudo dnf builddep emacs

  # Download the latest stable release from emacs website
  wget http://mirrors.kernel.org/gnu/emacs/emacs-26.3.tar.xz
  wget http://mirrors.kernel.org/gnu/emacs/emacs-26.3.tar.xz.sig

  # Verify the tar.xz file
  gpg --verify emacs-26.3.tar.xz.sig emacs-26.3.tar.xz

  # Once that has been taken care of, extract the tar.xz archive.
  tar -xvf emacs-26.3.tar.xz

  # Go into the newly made folder
  cd emacs-26.3

  # Configure the source
  ./configure

  # Compile the source
  make

  # Check the binary to see that it runs smoothly
  src/emacs -Q

  # Install the binary
  sudo make install
  ```
