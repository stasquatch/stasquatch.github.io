---
layout: page
title:  "Using Jekyll: Part One"
date:   2017-04-28 03:36:00 -0400
categories: tutorial
excerpt: "A guide to setting up Jekyll on Windows, great for beginners"
---

## Using Jekyll, Part One: Installing Jekyll on Windows

Part One of my Jekyll series aims to be a beginner-friendly guide to installing Jekyll on Windows.

As I went through this process on my own, I ran into a lot of difficulties. I pieced together information from a variety of slightly outdated tutorials, though they weren’t very beginner friendly. I wanted to create a tutorial for a new coder to help smooth the process for someone else.

### Table of Contents
* [What is Jekyll](#what-is-jekyll)
* [Prerequisites](#prerequisites)
* [Steps to Install](#steps-to-install)
* [Troubleshooting Tips](#troubleshooting-tips)

### What is Jekyll

[Jekyll](https://jekyllrb.com/) lets you create static (aka simple) websites. It runs on [Ruby](https://www.ruby-lang.org/en/), but you won’t touch any Ruby code along the way.

What’s great about Jekyll is its ease of publishing blog articles. It works with Markdown, a way of simplifying adding content to a webpage (if you’ve edited a Git repo’s readme.md, you’ve worked with Markdown).

If you want to create a website, but WordPress (or SquareSpace or whatever) seem like overkill for your project, the Jekyll is a great way to live in the code and publish a simple website with ease.

According to their documentation, Jekyll wasn’t originally created for Windows, so there’s a few extra steps in setting it all up.

*Note:* This tutorial does not include creating a VM (virtual machine) for Linux, although that’s a work-around if you already have it set up on your computer. I wanted to keep things simple and run things off Windows.

### Prerequisites

* Basic HTML & CSS
* Knowing how to move around in the command line ([Codecademy Class](https://www.codecademy.com/learn/learn-the-command-line))
* A GitHub account if you plan on publishing there or using version control.

### Steps to Install

1. Install Ruby for Windows via [RubyInstaller.org](http://rubyinstaller.org/downloads/)
    1. Save it somewhere like `C:\Ruby23` (or whatever version you’re downloading)
    2. Check “Add Ruby executables to your PATH” and “Associate .rb and .rbw files with this Ruby installion”
    3. If you type `ruby -v` in the command line you should see a version number.
    ```
    C:\Users\Harrison> ruby -v
    ruby 2.3.3p222 (2016-11-21 revision 56859) [x64-mingw32]
    ```
2. Install Ruby DevKit via [RubyInstaller.org](http://rubyinstaller.org/downloads/)
    1. It should be further down on the page. Download the latest version compatible with the version of Ruby you’re using.
    2. When you unzip the DevKit folder, it won’t make a parent directory. I recommend unzipping it into a folder called RubyDevKit in a place that won’t change (like within your Ruby folder or at the C root)
    3. Open up the command prompt (cmd.exe) and move (`cd`) to the RubyDevKit folder (ex. C:\RubyDevKit) once it’s been unzipped.
    4. Run the line: `ruby dk.rb init`
    5. Open your favorite text editor (I use [Atom](https://atom.io/)) and open the `config.yml` file within your RubyDevKit folder. You should see something like this:
    ```
    # a bunch of commented out instructions
    ---
    - C:/Ruby23-x64
    ```
    If you don’t see that, type in the path of your Ruby folder. Don’t forget the dash space before the path.
    6. If you type gem -v in the command line you should see a version number.
    7. Now to connect DevKit to Ruby, run `ruby dk.rb install` and you should be all set.
3. Install [Jekyll](https://jekyllrb.com/docs/quickstart/)
    1. Run `gem install jekyll bundler` now that you have your Ruby environment set up. It may take a few moments and you’ll see a lot of lines of installation progress in the command prompt.
4. Make a new Jekyll Project
    1. Run `jekyll new myblog` (myblog being whatever the name of your project/folder). This will create a new folder called myblog and all the starter files/structure inside.
    2. `cd` into the folder myblog and open it in Atom to see your starter site
    <img src="/images/jekyll-pt-1/jekyll-structure-1.jpg" class="img-responsive" alt="The starter Jekyll structure">
    3. Run bundle exec jekyll serve in the command line to start a serve and see your brand new site (run locally).
    4. Going to `localhost:4000` in your browser will show the default Jekyll starter site. To stop the server, press CTRL+C in the command line.
    <img src="/images/jekyll-pt-1/serve-2.jpg" class="img-responsive" alt="The basic Jekyll site to begin with">
        * Unfortunately the `--watch` command (to automatically refresh the page whenever changes are made to your site’s files) doesn’t work on Windows. I have not explored work-arounds for this yet.
        * If you see the error `ERROR /favicon.ico not found.`, that means the browser looked for the fav icon (the icon next to the title in your browser’s tab) and couldn’t find one and therefore returned an error. We don’t care about that right now.
    5. You’ll see in the screenshot above of the command prompt that while it runs the server successfully, it let’s me know there’s an issue with the wdm gem. When I was initially installing Jekyll for the first time, this wdm gem threw me for a loop for some reason. Return to the command line and stop your server if you haven’t already. Run `gem install wdm` to install the necessary gem (a gem is an add-on feature for Ruby). Then, open your `Gemfile` (which operates as an index of gem information for both you and the computer) and add the following line: `gem 'wdm', '~> 0.1.0' if Gem.win_platform?`
    <img src="/images/jekyll-pt-1/wdm-install-2.jpg" alt="adding the wdm code" class="img-responsive">
    6. If you run `bundle exec jekyll serve` again, it should work and not show any errors with wdm.
    7. Once you have everything set with your Gemfile, you don't actually have to keep running `bundle exec jekyll serve` every time. You can go ahead and use `jekyll serve` from here on out.

5. Publishing with [GitHub Pages](https://pages.github.com)
    1. If you’re planning on publishing your website using Github Pages, you’ll want to dive back into your Gemfile:
        * Comment out the gem ‘jekyll’ line
        * Uncomment out the gem ‘github-pages’ line
          <img src="/images/jekyll-pt-1/github-pages-install-1.jpg" class="img-responsive" alt="Editing the Gemfile for Github Pages publishing">
    2. Rename your parent folder (ex. `myblog`) to: `[username].github.io`, placing your Github username in the placeholder.
    3. Go to [github.com](https://github.com) and make a folder of the same name.
    4. `git init` in the parent folder ([username].github.io).
    5. `git add *` to add all files.
    6. `git status` to check for errors.
    7. `git commit -m “initial commit”` to make your first commit.
    8. `git remote add origin [link from new github repo]` to connect the folder to your Github Repo.
    9. `git push` to make the changes live.
    10. Go to `[username].github.io` and your website should be there.

## Troubleshooting Tips

I had a lot of trouble when I was installing Jekyll on my laptop, but no trouble whatsoever when installing on my desktop. I’m 100% sure it was user error (or an `ID10T error`). That being said, if you run into any issues, here are some helpful tips & links that I came across:
* I forgot the dash on the DevKit `config.yml` file
* Whenever you change the Gemfile or switch computers, I suggest running the following commands to make sure your gems are updated:
  * `bundle install`
  * `gem update` (updates all gems)
  * `gem update --system` (updates Gem itself)
  * If you want to know what your environment looks like, including file paths and version numbers: `gem env`
* Jekyll has some helpful info for installing on Windows, though I highly recommend NOT installing Bash on Ubuntu on Windows unless you plan on using it for something else too: [Jekyll Docs for Windows](https://jekyllrb.com/docs/windows/). I used Chocolatey the first time installing Jekyll but didn’t need to on the second computer.
* [Tutorial: Getting Jekyll Up and Running on Windows](http://thedustytome.com/2014/02/15/Getting-Jekyll-up-and-running-on-Windows/)
* If you need a Markdown cheatsheet, I like [this one](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet).
* A good Github cheat sheet is [No Deep Shit](https://rogerdudler.github.io/git-guide/).

## Up Next

* **Part Two** will address how to add and remove content and why Front Matter matters.
* **Part Three** will address how to customize your Jekyll site's template and design.
