from dispatch.plugins.bases import StoragePlugin


class ConfluencePlugin(StoragePlugin):
    title = 'Confluence'
    slug = 'confluence'
    description = 'Plugin generating confluence post-mortem page.'
    version = "0.0.1"
    author = 'Ant0wan'
    author_url = "https://github.com/contentsquare/dispatch.git"

    def create(self, items, **kwargs):
        return "Conversation Created"

    def add(self, items, **kwargs):
        return "User Added"

    def send(self, items, **kwargs):
        return "Message sent"

    def __init__(self):
       # self.configuration_schema = GoogleConfiguration
        self.scopes = ["https://www.googleapis.com/auth/drive"]
