// Replace with your folder's ID
var folderId = "1lRWvhopDmGnnWdOYZnsexl5-3e9H1807"; 

function deleteOldFiles() {
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFiles();
    var now = new Date();
    var thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds

    while (files.hasNext()) {
        var file = files.next();
        //console.log(file.getName())
        if (file.getDateCreated() < thirtyDaysAgo && file.getName() != "NEXUS_DO_NOT_DELETE") {
            file.setTrashed(true); // Moves the file to trash
            Logger.log("Deleted file: " + file.getName());
        }
    }
}