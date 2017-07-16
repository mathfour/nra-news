/**
 * Created by boncrowder on 7/15/17.
 */

var routes = require('./routes/index');
var articles = require('./routes/ArticleRoutes');
var notes = require('./routes/NoteRoutes');


app.use('/', routes);
app.use('/articles', articles);
app.use('/notes', notes);
