spec = Gem::Specification.find_by_name 'iiifc-theme'
Dir.glob("#{spec.gem_dir}/lib/tasks/*.rake").each { |r| load r }

task default: :ci

desc 'Run the site locally on localhost:4000'
task :dev do
  sh 'bundle exec jekyll clean'
  sh 'bundle exec jekyll serve --watch --drafts'
end

desc 'Build CI site, run html-proofer and link tests'
task :ci do
  Rake::Task['build:ci'].invoke
  Rake::Task['test:html'].invoke
  Rake::Task['test:links:internal'].invoke
  Rake::Task['test:links:iiif'].invoke
end
