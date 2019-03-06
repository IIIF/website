require 'html-proofer'
require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new(:spec)

desc 'Run the Markdown specs and HTML Proofer'
task :ci do
  sh 'bundle exec jekyll clean'
  sh 'bundle exec jekyll build -d _site/test --baseurl /test'

  sh 'grunt test'
  sh 'scripts/check_json.py -v'
  sh 'scripts/check_mixedcontent.sh'
  Rake::Task['spec'].invoke
  Rake::Task['check_html'].invoke
end

desc 'Check links and html without caching'
task :check_html do
  HTMLProofer.check_directory('./_site', check_html: true,
                                         cache: { timeframe: '1w' },
                                         http_status_ignore: [0, 301, 302, 429],
                                         url_ignore: ['https://vimeo.com/229253706?ref=tw-share', 'http://ksn.io','http://www.irht.cnrs.fr', 'https://www.linkedin.com/in/colin-greenstreet-7434b9/','http://www.darelkotob.gov.eg/index.html','https://natlib.govt.nz/','https://www.ihg.com/holidayinn/hotels/us/en/washington/wassm/hoteldetails','http://www.bnjm.cu/']).run
end

desc 'Run the site locally on localhost:4000'
task :dev do
  sh 'bundle exec jekyll clean'
  sh 'bundle exec jekyll build'
  sh 'bundle exec jekyll serve --watch --drafts'
end

task default: :ci
