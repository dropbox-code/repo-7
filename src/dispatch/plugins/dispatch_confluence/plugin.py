#import dispatch_confluence
from dispatch.plugins.base.conversation import ConversationPlugin
#from dispatch.plugins.dispatch_confluence import drive as google_drive_plugin


class ConfluencePlugin(ConversationPlugin):
    title = 'Confluence'
    slug = 'confluence'
    description = 'Plugin generating confluence post-mortem page.'
    version = dispatch_pluginname.VERSION
    version = google_drive_plugin.__version__

    author = 'Ant0wan'
    #author_url = 'https://github.com/ContentSquare/platform_houston/dispatch_plugin'
    author_url = "https://github.com/netflix/dispatch.git"

    def create(self, items, **kwargs):
        return "Conversation Created"

    def add(self, items, **kwargs):
        return "User Added"

    def send(self, items, **kwargs):
        return "Message sent"

    def __init__(self):
       # self.configuration_schema = GoogleConfiguration
        self.scopes = ["https://www.googleapis.com/auth/drive"]
