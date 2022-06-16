from dispatch.plugins.bases import DocumentPlugin
import dispatch.plugins.dispatch_dispacth as confluence_plugin


__version__ = "0.1.0"


#@apply(timer, exclude=["__init__"])
#@apply(counter, exclude=["__init__"])
class ConfluencePlugin(DocumentPlugin):
    title = 'Confluence Plugin - Document Management'
    slug = 'confluence-doc'
    description = 'Uses Confluence to help manage external documentation.'
    version = confluence_plugin.__version__

    author = 'Ant0wan'
    author_url = "https://github.com/contentsquare/dispatch.git"

    def get(self, key, **kwargs):
        return

    def create(self, key, **kwargs):
        return

    def update(self, key, **kwargs):
        return

    def delete(self, key, **kwargs):
        return

    def move(self, key, **kwargs):
        return
