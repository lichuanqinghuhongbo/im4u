/**
 * Created by antianlu on 13-11-22.
 */
// return the current user information

function User(username,password) {
    this.username =username;
    this.password = password;
}

var U = User.prototype;
U.insert = function(user){}
U.delete = function(){}
U.findUser = function(myid){}
U.getOnline = function(){}
U.update = function(){}

// get chat log information
U.findChatLog =function(myid,userid)
{}
// get my notice information
U.findNotice =function(myid)
{}

// broadcast all online users
U.online = function()
{}
//
U.offline = function()
{}

U.changeStatus = function()
{}

exports.User = User;