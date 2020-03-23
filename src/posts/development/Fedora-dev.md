---
title: Using Fedora for Development in 2020
date: 2020-01-25 00:00:00
category: 'development'
path: "/fedora-dev-2020"
---

You might have noticed that I put up some posts about Fedora already and how to
install Emacs for it. This is because of the version freezing that happens
between releases of Fedora.

It's a good thing in most cases, but not in terms of Emacs as there had recently
been a bug in Emacs versions prior to 26.3.

So let's get started with the topic of the day.. using Fedora for development.

## Background
Fedora is a linux based distribution which is similar to Ubuntu in the way
that they release a new version every 6 months and now the current version of
Fedora is Fedora 31 which got released on the 28th October 2019. The team behind
Fedora freezes the packages wanted for the release before the release date of
the update and boom, it's donezo.

Having this kind of release schedule gives the users some stability compared to
rolling release distributions which can break down at any moment unless you know
what you are doing however that doesn't really happen as frequently as you would
think.

Fedora has been around since 2003 and has since gotten sponsored by Red Hat and
I myself consider it a very good thing as that means that the team behind Fedora
will get paid for making Fedora a great distribution.

Fedora uses Gnome as their default Desktop Environment and having it be a
vanilla version of it, so you wont get any unnecessary applications or plugins
that will ruin the experience that you would wanna create on this platform.

It uses the RPM package system which is used by various distributions such as
OpenSUSE and CentOS. The defacto tool for handling all those .rpm files is DNF
which has a very simple and easy to use command set. Fedora has for some time
been a big advocate when it comes to flatpak and it's added by default. (Fedora
also have great support for Ubuntu's snaps).

Fedora does not only have Gnome as their desktop environment, but the original
workstation iso includes it, but all the major desktop environments can be found
in the package repositories and in what fedora calls "Fedora spins".

If you ever felt like you wanted something similar to NixOS or any kind of
immutable system, then Fedora Silverblue might be the choice for you, as it has
a easy to use immutable system that uses snapshots as the system and also uses
flatpaks as a way of containerizing everything.

## Development on Fedora
Developing anything on Fedora is pretty much like any other Linux distribution
out there, only because the same building block has been used. It's not really
harder to install applications on Fedora and if there isn't any bundled package
for a certain application, then building from source is fairly simple as much of
the build tools are bundled into package groups on the distributions package
repository.

Especially if you the reader go and read how to install Emacs on Fedora, you
will see that it doesn't take more than 2 commands to get all the things you
need in order to install the latest and great version of Emacs and that's pretty
much how it goes with any application.

Development server-wise, Fedora uses systemd to make it easy for the user to
handle certain applications and their states, as well as making them into
daemons.

One thing that can help a programmer is the install tool
[Fedy](https://github.com/rpmfusion-infra/fedy) which has a easy install for
just about any tool that you could need as a programmer.

Other things such as RPMFusion which is essentially a repository for other
things that the official Fedora repositories don't have, is a good thing to have
around.

## Conclusion
To be perfectly honest, unless you ain't using Hannah Montana Linux are you
really a linux user? No but, using any operating system out there is better than
writing on a piece of paper, which means that it does not really matter if you
use Windows or MacOS X or even one of the BSD's, you can still probably get
around just fine. I like Fedora because it was one of the first Linux
Distributions that I came in contact with as a young boy and I like the dnf
package manager, the rpm files and sometimes the manual compilation.

so use whatever you like and if you want to use Fedora, a good place to start is [Here](https://getfedora.org/)
