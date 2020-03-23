---
title: A Windows Development Story
date: 2020-01-12 00:00:00
category: 'development'
path: "/windows-dev"
---

So I was back on Windows for a while, because I wanted to see how much I would
need to configure things to have a similar setup as I have on Linux,
and the results are surprising.

Generally, I code in Java, it's one of those languages that one can hate and
love at the same time, but I love it for being cross-platform without needing to
create multiple versions of the same code just so that you can run it on
different systems.

To get it running, you first need the *Java Development Kit* or *JDK*
in short, in Windows, you can fetch an installer from Oracle for the simplest
solution and you also need to add the **JDK path** to the environment variable
list as **JAVA_HOME** and you should be ready to go afterward.

It's a fairly easy process and takes no time to add, now afterward I needed to
choose the software I could write my code on, and with Java, it's very very
recommended to at least have auto-completion as it can be very daunting to
remember entire libraries and their methods.

I had a few choices and those were:
- IntelliJ
- Eclipse
- Netbeans
- VSCode

and more that I don't care about, so thinking about which one would suit
me best is not an easy task, as I do like **IntelliJ** but it's a bit heavy and I
don't feel like I need a full suite of tools to make good code work
well.

**Eclipse** has been a staple in the Windows Development World for Java for a very
long time and there are a lot of companies that use it religiously, it's a very
good IDE, but still a bit heavy with a lot of features that I don't think
I need.

**Netbeans** is an IDE made by the Apache community and surely is a good IDE,
it's used by my school but it is like the rest with having too much nonsense and
is very un customizable which I don't like.

Finally **VSCode** has a bunch of packages that give support for Java
development and is very easy to code with, it's also very light so this was the obvious choice for my time on Windows, and so I installed the packages needed
and tried it out, and it worked very well for the time I was on Windows.

But something was missing, Emacs was missing, my config had been sitting still
for some time and my config itch grew every day that I was using VSCode, until
the day when I finally decided to install Emacs on Windows.

That was a mistake, as installing Emacs on Windows is painful. Most of the tools
needed to have a sane configuration don't exist on windows, or
it's a little bit harder to find, so loading my configuration I had been writing
for Linux was a big no-no as I experienced when I tried and failed.

I wanted to try out WSL2 as people had been saying that Emacs works well with
that, but I never really got it to work properly so I went to the next step
which was to have a VM set up only for Emacs, and that worked for a while until
the day I got fed up with Windows and wanted to go back to where I belonged,
which was to Linux once more.

## Conclusion
Windows can be great for a lot of things, even though there are a lot of people
that are very vocal about hating on the Operating System, but that should not
have people be discouraged to use it for development, as it can be as easy to
code on as with Linux, except if you are a C/C++ dev, that's when you really
want to go to Linux.

Find the tools needed for the job and don't care what other people think about
how you do it as long as you get it done. Throughout my little journey, I often
got recommended to switch to IntelliJ as it is "great" but in my opinion, it's
not something for me.

So go out and explore, find the tools, learn the tools and master the tools.
