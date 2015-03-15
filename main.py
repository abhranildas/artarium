import os
import urllib

from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
import strings
import jinja2
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
	loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
	extensions=['jinja2.ext.autoescape'],
	autoescape=True)

class homepage(webapp.RequestHandler):
	def get(self):
		#self.response.out.write(strings.artarium_template%strings.stringlist_homepage)
		template = JINJA_ENVIRONMENT.get_template('templates/home.html')
		self.response.write(template.render(strings.stringlist_homepage))

class gallery(webapp.RequestHandler):
	def get(self):
		gallerykey=self.request.path[1:]
		artistkey=strings.togglegalart(0,gallerykey)
		template = JINJA_ENVIRONMENT.get_template('templates/gallery_mode.html')
		self.response.write(template.render(strings.stringlist_gallery(gallerykey,artistkey)))
		#self.response.out.write(strings.artarium_template%(strings.stringlist_gallery(gallerykey))%strings.read_galart_file(gallerykey,strings.togglegalart(0,gallerykey)))

class artist(webapp.RequestHandler):
	def get(self):
		artistkey=self.request.path[1:]
		template = JINJA_ENVIRONMENT.get_template('templates/artist.html')
		self.response.write(template.render(strings.stringlist_artist(artistkey)))
		#self.response.out.write(strings.artarium_template%(strings.stringlist_artist(artistkey))%strings.read_galart_file(strings.togglegalart(1,artistkey),artistkey))
	
class about(webapp.RequestHandler):
	def get(self):
		#self.response.out.write(strings.artarium_template%(strings.stringlist_about()))
		template = JINJA_ENVIRONMENT.get_template('templates/about.html')
		self.response.write(template.render(strings.stringlist_about))
	
class faq(webapp.RequestHandler):
	def get(self):
		self.response.out.write(strings.artarium_template%(strings.stringlist_faq()))
	
class terms(webapp.RequestHandler):
	def get(self):
		#self.response.out.write(strings.artarium_template%(strings.stringlist_terms())%strings.read_terms())
		template = JINJA_ENVIRONMENT.get_template('templates/terms.html')
		self.response.write(template.render(strings.stringlist_terms))

application = webapp.WSGIApplication([
('/', homepage),
('/avishek-roy', artist),
('/tejal-akolkar', artist),
('/rajesh-bhattacharjee', artist),
('/abhranil-das', artist),
('/timeless-terrains', gallery),
('/artwork', gallery),
('/light-on-the-land', gallery),
('/backpackers-diary', gallery),
('/about', about),
('/faq', faq),
('/terms', terms)],
debug=True)

def main():
	run_wsgi_app(application)

if __name__ == "__main__":
	main()