import dispatch_pluginname
from dispatch.plugins.base.conversation import ConversationPlugin

class ConfluencePlugin(ConversationPlugin):
    title = 'Confluence'
    slug = 'confluence'
    description = 'Plugin generating confluence post-mortem page.'
    version = dispatch_pluginname.VERSION

    author = 'Ant0wan'
    author_url = 'https://github.com/ContentSquare/platform_houston/dispatch_plugin'

    def create(self, items, **kwargs):
        return "Conversation Created"

    def add(self, items, **kwargs):
        return "User Added"

    def send(self, items, **kwargs):
        return "Message sent"
