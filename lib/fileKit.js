const fileKit = {
    local: {
        onOpenFile: function() {
            let element = document.createElement("input");
            element.type = "file";
            element.accpet = ".json";
            let onOpen = function(event) {
                let file = event.target.files[0];
                if (!file) {
                    alert(value.string.alert.openFileFailed);
                    return;
                }
                let fileReader = new FileReader();
                fileReader.onload = function() {
                    fileKit.parseFile(fileReader.result);
                };
                fileReader.readAsText(file);
            };
            element.addEventListener('change', onOpen, false);
            element.style.display = "none";
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        },
        onSaveFile: function() {
            if (portalList.length < 1) {
                alert(value.string.alert.saveFileNoPortal);
                return;
            }
            let element = document.createElement("a");
            element.href = URL.createObjectURL(fileKit.getFileBlob());
            element.download = value.string.file.name;
            element.style.display = "none";
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        },
    },
    googleDrive: {
        _fileId: null,
        getFile: function(onFinished) {
            let onGetFileId = function() {
                gapi.client.drive.files.get({
                    fileId: fileKit.googleDrive._fileId,
                    alt: "media"
                }).then(function (response) {
                    portalList.splice(0, portalList.length);
                    portalList.push(...response.result);
                    onFinished();
                });
            }

            gapi.client.drive.files.list({
                q: "name = 'potori.json'",
                pageSize: 10,
                spaces: value.string.path.googleDrive.folder,
                fields: "files(id)"
            }).then(function (response) {
                let fileList = response.result.files;
                if (!fileList || fileList.length < 1) {
                    onFinished();
                    return;
                }
                fileKit.googleDrive._fileId = fileList[0].id;
                onGetFileId();
            });
        },
        onUploadFile: function() {
            // Ref: https://gist.github.com/tanaikech/bd53b366aedef70e35a35f449c51eced
            let url = "";
            let method = "";
            if (fileKit.googleDrive._fileId) {
                method = "PATCH";
                url = value.string.path.googleDrive.updateFile + fileKit.googleDrive._fileId + value.string.path.googleDrive.uploadParam;
            } else {
                method = "POST";
                url = value.string.path.googleDrive.createFile;
            }

            let metadata = {
                "name": value.string.file.name,
                "mimeType": value.string.file.type,
                parents: [value.string.path.googleDrive.folder],
            };

            let form = new FormData();
            form.append("metadata", new Blob([JSON.stringify(metadata)], { type: value.string.file.type }));
            form.append("file", fileKit.getFileBlob());
            fetch(url, {
                method: method,
                headers: new Headers({
                    "Authorization": "Bearer " + gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token
                }),
                body: form,
            }).then(response => response.json()
            ).then(response => {
                fileKit.googleDrive._fileId = response.id;
                alert(value.string.alert.uploaded);
            });
        },
    },
    parseFile: function(content) {
        ui.refresh();
        portalList.splice(0, portalList.length);

        let list = [];
        try {
            list = JSON.parse(content);
            if (list.length === 0) {
                alert(value.string.alert.openFileEmpty);
                return;
            }
        } catch(error) {
            alert(value.string.alert.openFileFailed);
            return;
        }
        for (let portal of list) {
            if (portal.id === undefined
                || portal.title === undefined
                || portal.image === undefined
                || portal.status === undefined
                || portal.confirmedTime === undefined
                || portal.confirmationMailId === undefined
            ) {
                alert(value.string.alert.openFileStructError);
                return;
            }
        }
        portalList.push(...list);
        ui.button.openFile.hidden = true;
        ui.button.saveFile.hidden = false;
        display();
    },
    getFileBlob: function() {
        let list = [];
        for (let portal of portalList) {
            let decyclic = {};
            for (let key of Object.keys(portal)) {
                if (key !== "marker") decyclic[key] = portal[key];
            }
            list.push(decyclic);
        }
        return new Blob([JSON.stringify(list, null, 4)], { type: value.string.file.type });
    },
}