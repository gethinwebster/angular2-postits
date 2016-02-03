import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';

// root component
import { PostitNotes } from 'components/postit-notes/postit-notes';

// global styles
import 'styles/app.scss';


bootstrap(PostitNotes, [
  HTTP_PROVIDERS
]).catch((error: Error) => console.error(error));
