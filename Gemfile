source 'https://rubygems.org'

gem "rake"

gem "jekyll", "~> 4.1.1"
# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.5"

group :jekyll_plugins do
    gem 'jekyll-redirect-from'
    gem 'jekyll-datapage-generator'
end

group :test do
  gem 'html-proofer'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
