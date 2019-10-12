---
title: Linux Mindset
date: 2019-08-01 00:00:00
category: 'linux'
---

Hello there!
Today I would like to talk a bit about **Linux**.

Many years ago, when I was in middle school, during a computer class,
I found a very interesting thing on the internet, it was called
Ubuntu, now Ubuntu had existed long before I discovered it, and even
before Ubuntu, there was a distribution called Debian and being a
curious soul I went and tried to install this wonderful little
distribution, but to my dismay it failed pretty much instantly.

It took me a few tries to get it to work, but once I had gotten it to
work on my machine, it was beautiful, there was Gnome 2, a powerful
terminal which would listen to my command, and perform it once I had
clicked enter on my keyboard, it was a very joyous moment for this
little nerd and that was when it all started. 

A few weeks later and I was finally being able to wield the great
powers which the terminal had bestowed upon me, I took it all
and continued on my quest, as this was merely a little taste of what
this world could give me.

That's a small story from when I discovered the wonderful thing called
Linux and after having used almost every single distro since that
humble beginning, failing and breaking the system in ways I never even
could imagine possible. I wanted to extend an olive branch to the newly
arrived people in the "Linux sphere" so let's start with that now.

## Be Patient

First thing you will need to learn, and this is a hard one, but be
patient. This should go without saying, but a common problem I see
with people wanting to get into something new is that they most often
just want everything to just work and not doing any kind of
work.

While this is true for most cases, there might be a time when
you get an error and what you need to do at such a time is to just
take a deep breath and figure out what went wrong. It's essentially a
make or break point for many people only because of the fact that they
dont have the patience to continue and go back to their old ways of
using a computer.

Don't be like that, be **better**.


## Figure out what went wrong

There might come a time when an application wont start, and no error
code is displayed as the result of not starting, dont fret, Dreameh is
here for you.

If the application has a generic command to start via the terminal,
try to type that command in, in order to see if you are able to
generate the error code. If this doesn't work like with some
application which doesn't simply start no matter how much you try to
write their name, then what you should do is to locate the executable

```shell
which <application>
```
is generally how you would locate a executable and it would look
something like this:

![](https://i.imgur.com/Yo9J0YS.png)

if this feels too complicated, then there's an alternative for you,
and that alternative is to check the location of the executable from
the application list, which might generally look like this:

![](https://i.imgur.com/Hhd7fny.png)

if you cannot find the executable for your application through any of
these means, then you should probably install the application, as it
is not currently installed.

## Learn to use google

One thing I learned early on, was that google is such an amazing tool
for learning, but it seems like many seem to fail when it comes to how
to google in order to get the right result. So let me teach you the
basics in how to google correctly.

if you ever get an error, then you need to first see if there's an
error code lurking.

If you find the error code, then you simply go to google and type
following in:

``` 
<error-code> linux
```
or if it might be something specific for let's say Ubuntu, then
following would be more appropriate:
```
<error-code> Ubuntu
```

if you know these two ways of searching, then life will be easy using
linux, as no problem will ever be too big for you to solve, no package
shall be in-accessable, nor shall any user group be unavailable for
you.

## Last thing

As you probably already know, the word Linux is used in the incorrect
way all over the world only to create confusion as Linux is currently
used as a word for the group of distributions that exist with the
Linux Kernel, and while I would say that it might be correct to say "I
use Linux", it makes little sense to the seasoned user, as they will
most often ask you about the distribution and not about the kernel.

so remember:

**Linux == Kernel**

**Ubuntu == Distribution**
