---
title: Emacs 27/28 on Fedora 31
date: 2020-01-12 00:00:00
category: 'emacs'
---
In my previous post I showed how you can install Emacs through the Emacs
website, this time I will be showing you how you can install Emacs through the
mirrored github repository that Emacs uses.

Mirrored in the sense that the Emacs dev group don't use github, but their own
server, so there are people who have mirrored that repository and added it to
github.

One thing that can be nice as a emacs user is to have the latest in Emacs
software, so getting the "edge" version is always a little scary but fun.

So let's start with cloning the repository from github:
    `git clone https://github.com/emacs-mirror/emacs.git`
    
Afterwards we will have to do a similar route we took in the previous post with
downloading the dependencies for emacs and it's easy to do it like so:

```bash
# Dependencies for development
sudo dnf group install "Development Tools"

# Dependencies specific to Emacs
sudo dnf builddep emacs
```

Now since that is done, we need to run `$ ./autogen.sh` in order to generate the
tools for the git build.

then we do it like the previous post, like `$ ./configure` and that will
configure Emacs.

Once that is done compile the source `$ make` and once you have compiled the
source, check so that it works by running `$ src/emacs -Q`

If it runs as it should then go ahead and install the binaries with: `sudo make
install`

It's pretty easy to install, and in order to keep the install be updated, you
should do a git pull every now and again and do a reinstall. 
