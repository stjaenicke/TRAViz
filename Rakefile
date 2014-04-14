# Rakefile - create single combined nd compressed javascript file

COMPRESS="java -jar lib/yuicompressor-2.4.2.jar"
COMPRESSED_OUTPUT_FILE='traviz-min.js'
OUTPUT_FILE='traviz.js'

task :default => :all

task :all => [COMPRESSED_OUTPUT_FILE, OUTPUT_FILE]

# javascript sources
Files = %w(lib/jquery.min.js
lib/jquery.qtip.min.js
lib/raphael.js
js/TRAVizConnection.js
js/TRAVizGraph.js
js/TRAVizAligner.js
js/TRAViz.js
js/TRAVizConfig.js)

def cat_files(outputfile, basename)
  File.open(outputfile, 'w') do |x|
    Files.each do |f|
      x.puts(File.open(f).read.gsub('REPLACEME-REPLACEME', basename))
    end
  end
end

# Just one big JS file, no compression.
file OUTPUT_FILE => Files do
  basename = File.basename(OUTPUT_FILE, ".js")
  cat_files(OUTPUT_FILE, basename)
end

# Compress it.
file COMPRESSED_OUTPUT_FILE => Files do
  basename = File.basename(COMPRESSED_OUTPUT_FILE, ".js")
  cat_files(OUTPUT_FILE, basename)
  system "#{COMPRESS} #{OUTPUT_FILE} >> #{COMPRESSED_OUTPUT_FILE}"
end

# Clean up the whole thing.
task :clean do
  rm OUTPUT_FILE
  rm COMPRESSED_OUTPUT_FILE
end
