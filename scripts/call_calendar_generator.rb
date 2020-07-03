# call_calendar_generator.rb
#
# To use:
# $ gem install ri_cal ice_cube tzinfo
# $ ruby call_calendar_generator.rb
#
# A new file, moderator_cal.ics will appear in the same directory

require "ice_cube"
require "ri_cal"
require "tzinfo"
require "date"

MODERATORS = {
    technical: [
      "Jon Stroop",
      "Simeon Warner",
      "Tom Crane",
      "Rob Sanderson",
      "Mike Appleby"
  ].uniq.shuffle!, # .shuffle! to shuffle
    community: [
      "Ben Albritton",
      "Tom Cramer",
      "Claire Knowles",
      "Mark Matienzo",
      "Glen Robson",
      "Stu Snydman",
      "Julien A. Raemy",
      "Matt McGrattan",
      "Rashmi Singhal",
      "Jason Ronallo",
      "Josh Hadro"
    ].uniq.shuffle!
}

# Make sure this is the date of a call or risk being off by a week.
PERIOD_START = Date.new(2019,12,04)
PERIOD_END = Date.new(2020,07,29)

class TopicTracker
  def initialize
    @next = :technical # this will be first
    @now = :community 
  end

  def next
    @next, @now = @now, @next
    return @now
  end
end

def next_moderator(topic)
  next_mod = MODERATORS[topic].shift
  MODERATORS[topic].push(next_mod)
  next_mod
end

occurrences = IceCube::Schedule.new(start=PERIOD_START) { |s|
  s.add_recurrence_rule IceCube::Rule.weekly(2).day(:wednesday).until(PERIOD_END)
}.all_occurrences

dates = occurrences.map { |o| Date.parse(o.to_time.to_s) }

topic_tracker = TopicTracker.new

calendar = RiCal.Calendar do |cal|
  dates.each do |date|
    topic = topic_tracker.next
    m = next_moderator(topic)
    labl = "IIIF Bi-Weekly Community Call - #{topic.to_s}, #{m} moderates"
    description = "The IIIF community calls alternate between a technical and community focus, providing a forum for new and existing participants to share their work, learn about activities across the community, and discuss IIIF technology and future directions. Zoom link: https://stanford.zoom.us/j/356715389"

    puts "#{date}: #{m} (#{topic.to_s})"

    dt_start = DateTime.parse("#{date.to_s}T12:00:00").set_tzid("America/New_York")
    dt_end = DateTime.parse("#{date.to_s}T01:00:00").set_tzid("America/New_York")

    cal.event do |event|
      event.summary = labl
      event.description = description
      event.dtstart = dt_start
      event.dtend = dt_end
      event.url = "https://stanford.zoom.us/j/356715389"
    end
  end
end

File.open('moderator_cal.ics', 'w') { |f| f.write(calendar) }
