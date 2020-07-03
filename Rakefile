require 'html-proofer'
#require 'rspec/core/rake_task'

#RSpec::Core::RakeTask.new(:spec)

desc 'Run the Markdown specs and HTML Proofer'
task :ci do
  sh 'bundle exec jekyll clean'
  sh 'bundle exec jekyll build -d _site/test --baseurl /test'

  # could look at changing this to html-proofer
  #sh 'grunt test'
  #sh 'scripts/check_json.py -v'
  #sh 'scripts/check_mixedcontent.sh'
  #Rake::Task['spec'].invoke
  Rake::Task['check_html'].invoke
end

desc 'Check links and html without caching'
task :check_html do
  HTMLProofer.check_directory('./_site', check_html: true, 
                                         validation: {report_mismatched_tags:true, report_invalid_tags: true },
                                         check_img_http:true, 
                                         disable_external: true,
                                         ).run
end

desc 'Run the site locally on localhost:4000'
task :dev do
  sh 'bundle exec jekyll clean'
  sh 'bundle exec jekyll build'
  sh 'bundle exec jekyll serve --watch --drafts'
end

task default: :ci
