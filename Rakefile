spec = Gem::Specification.find_by_name 'iiifc-theme'
Dir.glob("#{spec.gem_dir}/lib/tasks/*.rake").each { |r| load r }

desc 'Run the site locally on localhost:4000'
task :dev do
  sh 'bundle exec jekyll clean'
  sh 'bundle exec jekyll serve --watch --drafts'
end
