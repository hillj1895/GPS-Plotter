# PlotGeo
GPS Data Visualizer

## Summary

The idea is that we want something we can use to plot GPS coordinates on a map and filter data based on our needs.
For now it should: 

* Assign different colors to each cluster/class
* (Optional) Filter points based on a given time range.

For Test data you'll be given a CSV file; which will be a subset of data we have in our database. 
It'll be 2 - 4 weeks worth.

###### Some inspirational sites:
* [Google Maps](https://www.google.com/maps/place/Liberty+Bell/@39.9496144,-75.1524761,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6c8830b04502f:0xce39e053fb81ef23!8m2!3d39.9496103!4d-75.1502821) for Design & Layout
  - Here you'll find a layout with a control panel along the left, and the main content on the right. It's best to maximize
    the size of the map, because that's what we'll look at the most.
* [BatchGeo](https://www.batchgeo.com/) for Functionality
  - Here you can see forms of clustor coloring, and filter applications

## Tools

* [Google Maps API](https://developers.google.com/maps/): For Plotting
* Javascript (optoinal w/ [JQuery](http://jquery.com/), but recommended): Client side programming
* CSS (optional w/ [Bootstrap 3](http://getbootstrap.com/), but recommended): Styling and layout control
* (Completely Optional) [Web Components](https://www.polymer-project.org/1.0/) (if you use it, you're on your own): 


## Guide 

### 1: Web Page Layout

Learn how to layout a web page. You can do this in raw HTML and CSS, but if you want to make things easier (but sort of harder) use Bootstrap.
It has a [Grid System](http://getbootstrap.com/css/#grid) that you can use that will make layout websites easier. It's hard at first to understand, but if 
take your time to get it, you won't want to do it any other way (trust me).

Note, we suggest the layout seen for Google Maps, but it's not necessary. If you think you found a better design that 
can maximize map real-estate, and still provide room for controls, by all means do so. Just show us the mock design.

### 2: Add a Map to the Layout!

This should be an exciting second step. You'll add a map to the main content portion of the page. Once you manage this 
try plotting something on it. Not necessary something from the data we give you, but at least one point you make up.

I recommend understanding how to control the map. We make the assumption that when we actually plot points on the map 
that the points will be perfectly placed on the map so we can se eveything without making adjustments. I'm sure, as you 
may find out soon enough, that that convenience may not be given out of the box. It's not a neccessary feature, but a handy 
one to have (because I'm lazy). Just as long as we're able the Pan, Zoom, and maybe (optionally) Rotate.

### 3: Add an Upload Button & Parse File

As you'll soon find out when you want to try using data on your computer for a Javascript application (minus NodeJS stuff; which 
is a different story) you'll see that there's no way to read it directly from your computer. That's intentional. Can you imagine 
what havoc this would cause if it could! So you need to add an upload button to get data. 

You're task is to get the data, and be able to read/parse it. I recommend using [Papa Parser](http://papaparse.com/) to 
parse the CSV. That way you don't have to make you're own reader, but that's up to you. I almost always advocate not to 
reinvent the wheel, and be lazy (in a good way)!

### 4: Plot Data from File

This is a big step. This is where most of the Javascript programming will happen. 
If I had to break this down into 2 steps I would say:

#### 1: Just put points on the Map

Just plot the points onto the map.

#### 2: Assign Colors to Clusters

Assign points colors according to their cluster/class.

### 5: (Optional) Add Time Range Filter Control

I would imagine implementing this with a slider or two text fields that take a **begin time**, and an **end time**.
The idea is to just plot points that are within the two time ranges (inclusively) (i.e. 1/3/2015 - 1/5/2015 should include all points within those tow days and everytnig in between).


### More?

If you manage to get this far, we have other features that would be cool additions.

### Help?

You can contact us, and ask questions on Github Issues; which you can populate yourself, and I'll add stuff too. 
