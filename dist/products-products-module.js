(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/ng2-file-upload.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-file-upload/ng2-file-upload.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-file-upload/index.js"));


/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-buy.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"namePatient\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'Confirm purchase' | translate }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalReference.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"card-body table-responsive row\">\n    <div>\n      <div class=\"list-basket\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <!--Image-->\n            <div>\n              <img class=\"img-product\" src=\"{{ product.mainImg }}\">\n            </div>\n            <!--Details-->\n            <div class=\"details\">\n              <div>\n                <span>{{ product.name }}</span>\n              </div>\n              <div *ngFor=\"let item of listBasket; let i = index\">\n                <div class=\"price h5 text-warning\" [hidden]=\"i===1\">\n                  <h6>{{ item.detail[0].name }}</h6>\n                </div>\n              </div>\n              <div>\n                <span>{{ ('Patient' | translate) + ': ' + namePatient }}</span>\n              </div>\n              <div>\n                <span>${{ product.priceSale * quantity }}</span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-lg-6 params\">\n            <div class=\"row\">\n              <!--<div class=\"col-lg-4\">{{ 'Parameter' | translate }}</div>-->\n              <div class=\"col-lg-6\"></div>\n              <div class=\"col-lg-3 param\" *ngFor=\"let eye of eyesSelected\">\n                <span>\n                  {{ eye | translate }}\n                </span>\n              </div>\n            </div>\n             <!--CONTENT INFO-->\n            <div class=\"row\">\n              <!--PARAM NAME-->\n              <div class=\"col-sm-6\">\n                <dl>\n                  <dt>{{ 'Quantity' }}:</dt>\n                </dl>\n                <div *ngFor=\"let parameter of listNameParameters\">\n                  <dl>\n                    <dt>{{ parameter.name }}:</dt>\n                  </dl>\n                </div>\n              </div>\n              <!--EYES-->\n              <div class=\"col-sm-3\" *ngFor=\"let item of listBasket\"> <!--iteration by Eye, (right, left)-->\n                <div>\n                  <dl class=\"param\">\n                    <dt>{{ item.quantity }}</dt>\n                  </dl>\n                </div>\n                <div *ngFor=\"let specification of item.detail\">\n                  <div *ngFor=\"let param of specification.parameters\">\n                    <dl class=\"param\">\n                      <dt>{{ param.selected }}</dt>\n                    </dl>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalReference.dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n      <i class=\"fa fa-times\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Save' | translate }}&nbsp;\n      <i class=\"fa fa-save\"></i>\n    </button>\n  </div>\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\n    {{ r.description}}\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-buy.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.card-body > div:nth-child(1) {\n  padding-right: 25px; }\n.list-basket {\n  padding: 15px;\n  margin-top: 1.5em; }\n.list-basket .img-product {\n    width: 100%; }\n.list-basket .details {\n    text-align: center; }\n.list-basket .details span {\n      font-size: 18px;\n      font-weight: 600; }\n.list-basket .params {\n    /*display: flex;\n    align-items: center;*/ }\n.list-basket .params > div:nth-child(2) {\n      padding-top: 15px; }\n.list-basket .params .param {\n      display: flex;\n      justify-content: flex-end; }\n.list-basket > div:nth-child(1) > div:nth-child(2) {\n    justify-content: flex-end;\n    color: #494949; }\n"

/***/ }),

/***/ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConfirmationBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationBuyComponent", function() { return ConfirmationBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_models_buynow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/models/buynow */ "./src/app/shared/models/buynow.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ConfirmationBuyComponent = /** @class */ (function () {
    function ConfirmationBuyComponent(modalReference, alertify, notification, translate, basketService, orderService) {
        this.modalReference = modalReference;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.basketService = basketService;
        this.orderService = orderService;
        this.listFileBasket = new Array;
        this.listBasket = new Array;
        this.lista = new Array;
        this.listNameParameters = new Array;
        this.basketRequest = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_8__["BasketRequest"]();
        this.buyNow = new _shared_models_buynow__WEBPACK_IMPORTED_MODULE_9__["BuyNow"]();
    }
    ConfirmationBuyComponent.prototype.ngOnInit = function () {
        this.getDatos();
    };
    ConfirmationBuyComponent.prototype.close = function () {
        this.modalReference.close();
    };
    ConfirmationBuyComponent.prototype.getDatos = function () {
        var patient;
        var quantityAcum = 0;
        var eyesSelected = [];
        this.listBasket = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        this.lista = JSON.parse(JSON.stringify(this.datos.productRequestedList));
        lodash__WEBPACK_IMPORTED_MODULE_2__["each"](this.listBasket, function (productRequested) {
            quantityAcum = quantityAcum + productRequested.quantity;
            patient = productRequested.patient;
            var details = JSON.parse(productRequested.detail);
            lodash__WEBPACK_IMPORTED_MODULE_2__["each"](details, function (detail) {
                eyesSelected.push(detail.eye);
            });
            productRequested.detail = JSON.parse(productRequested.detail);
        });
        this.eyesSelected = eyesSelected;
        this.namePatient = patient;
        this.quantity = quantityAcum;
        this.listNameParameters = JSON.parse(this.product.types)[0].parameters;
    };
    ConfirmationBuyComponent.prototype.save = function () {
        var _this = this;
        if (this.typeBuy === 1) {
            this.basketRequest.idUser = this.datos.idUser;
            this.basketRequest.productRequestedList = this.lista;
            this.basketRequest.fileProductRequestedList = this.listFileBasket;
            this.basketService.saveBasket$(this.basketRequest).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].ok) {
                    _this.close();
                    _this.translate.get('Successfully save', { value: 'Successfully save' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                }
                else {
                    console.log(res.errors[0].detail);
                }
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.buyNow.idUser = this.datos.idUser;
            this.buyNow.productRequestedList = this.lista;
            this.buyNow.idRole = this.role;
            this.buyNow.fileProductRequestedList = this.listFileBasket;
            this.orderService.saveOrderDirect$(this.buyNow).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].ok) {
                    _this.close();
                    _this.translate.get('Order generated successfully', { value: 'Order generated successfully' }).subscribe(function (res) {
                        _this.notification.success('', res);
                    });
                }
                else {
                    console.log(res.errors[0].detail);
                }
            }, function (error) {
                console.log('error', error);
            });
        }
    };
    ConfirmationBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-buy',
            template: __webpack_require__(/*! ./confirmation-buy.component.html */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-buy.component.scss */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_10__["OrderService"]])
    ], ConfirmationBuyComponent);
    return ConfirmationBuyComponent;
}());



/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ 'Product Detail' | translate }}</h4>\n  <button type=\"button\" class=\"close close-modal\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\"> &times; </span>\n  </button>\n</div>\n<div class=\"content\">\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <h5>{{ 'Product Information' | translate }}</h5>\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Name' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter product name' | translate }}\" name=\"name\" formControlName=\"name\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"name.valid || name.pristine\">\n            <span>{{ 'Name is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Short description' | translate }}</label>\n            <input class=\"form-control\" maxlength=\"40\" placeholder=\"{{ 'Enter description' | translate }}\" name=\"descriptionShort\" formControlName=\"descriptionShort\"\n              required>\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"descriptionShort.valid || descriptionShort.pristine\">\n            <span>{{ 'Short description is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Base Price' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"{{ 'Enter base price' | translate }}\" name=\"priceBase\" formControlName=\"priceBase\">\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"priceBase.valid || priceBase.pristine\">\n            <span>{{ 'Base price is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Price 1' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"{{ 'Enter price 1' | translate }}\" name=\"price1\" formControlName=\"price1\">\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"price1.valid || price1.pristine\">\n            <span>{{ 'Price 1 is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Price 2' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"{{ 'Enter price 2' | translate }}\" name=\"price2\" formControlName=\"price2\">\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"price2.valid || price2.pristine\">\n            <span>{{ 'Price 2 is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Price 3' | translate }}</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"{{ 'Enter price 3' | translate }}\" name=\"price3\" formControlName=\"price3\">\n          </fieldset>\n          <div class=\"message-error\" [hidden]=\"price3.valid || price3.pristine\">\n            <span>{{ 'Price 3 is required' | translate }}</span>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <fieldset class=\"form-group\">\n            <label>{{ 'Status' | translate }}</label>\n            <div class=\"status\">\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(0)\" [checked]=\"(product.status === 0) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\">{{ 'Inactive' | translate }}</label>\n                </div>\n              </div>\n              <div>\n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"status\" class=\"custom-control-input\" (change)=\"assignStatus(1)\" [checked]=\"(product.status === 1) ? true : false\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">{{ 'Active' | translate }}</label>\n                </div>\n              </div>\n            </div>\n\n          </fieldset>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dismiss()\">{{ 'Cancel' | translate }}&nbsp;\n    <i class=\"fa fa-times\"></i>\n  </button>\n  <button type=\"button\" [disabled]=\"form.invalid\" class=\"btn btn-main\" (click)=\"save()\">{{ 'Save' | translate }}&nbsp;\n    <i class=\"fa fa-save\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.content {\n  overflow-y: auto;\n  max-height: 600px; }\n.content h5 {\n    font-weight: 600; }\n.content .spinner {\n    width: 50px;\n    height: 50px;\n    top: 62px;\n    left: 340px; }\n.content .spinner > div {\n      width: 10px;\n      height: 10px; }\n.status {\n  display: flex; }\n.status > div:nth-child(2) {\n    margin-left: 30px; }\n"

/***/ }),

/***/ "./src/app/products/modals/edit-product/edit-product.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/products/modals/edit-product/edit-product.component.ts ***!
  \************************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(modalReference, formBuilder, productService, notification, translate) {
        var _this = this;
        this.modalReference = modalReference;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.notification = notification;
        this.translate = translate;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function () { return function () {
            return (_this.searching = false);
        }; });
        this.filterStatus = [{ id: 0, name: 'Inactive' },
            { id: 1, name: 'Active' }];
        this.formatter = function (x) { return x.description; };
    }
    EditProductComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        console.log('product:', this.product);
    };
    EditProductComponent.prototype.initializeForm = function () {
        this.form = this.formBuilder.group({
            id: [this.action === 'edit' ? this.product.idProduct : ''],
            name: [this.action === 'edit' ? this.product.name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descriptionShort: [this.action === 'edit' ? this.product.descriptionShort : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceBase: [this.action === 'edit' ? this.product.priceBase : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price1: [this.action === 'edit' ? this.product.price1 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price2: [this.action === 'edit' ? this.product.price2 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price3: [this.action === 'edit' ? this.product.price3 : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            father: [this.action === 'edit' ? this.product.father : ''],
            code: [this.action === 'edit' ? this.product.code : ''],
            priceType: [this.action === 'edit' ? this.product.priceType : ''],
            minimum: [this.action === 'edit' ? this.product.minimum : ''],
            maximum: [this.action === 'edit' ? this.product.maximum : ''],
            increment: [this.action === 'edit' ? this.product.increment : ''],
            material: [this.action === 'edit' ? this.product.material : ''],
            description: [this.action === 'edit' ? this.product.description : ''],
            replacementPeriod: [this.action === 'edit' ? this.product.replacementPeriod : ''],
            warranty: [this.action === 'edit' ? this.product.warranty : ''],
            url: [this.action === 'edit' ? this.product.url : ''],
            stock: [this.action === 'edit' ? this.product.stock : ''],
            infoAditional: [this.action === 'edit' ? this.product.infoAditional : ''],
            types: [this.action === 'edit' ? this.product.types : ''],
            idSupplier: [this.action === 'edit' ? this.product.supplier.idSupplier : ''],
            idCategory: [this.action === 'edit' ? this.product.category.idCategory : ''],
            status: [this.action === 'edit' ? this.product.status : '',]
        });
    };
    EditProductComponent.prototype.close = function (data) {
        this.modalReference.close(data);
    };
    EditProductComponent.prototype.dismiss = function () {
        this.modalReference.dismiss();
    };
    EditProductComponent.prototype.assignStatus = function (value) { this.form.get('status').setValue(value); };
    Object.defineProperty(EditProductComponent.prototype, "status", {
        get: function () { return this.form.get('status'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "name", {
        get: function () { return this.form.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "descriptionShort", {
        get: function () { return this.form.get('descriptionShort'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "priceBase", {
        get: function () { return this.form.get('priceBase'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "price1", {
        get: function () { return this.form.get('price1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "price2", {
        get: function () { return this.form.get('price2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductComponent.prototype, "price3", {
        get: function () { return this.form.get('price3'); },
        enumerable: true,
        configurable: true
    });
    EditProductComponent.prototype.save = function () {
        var _this = this;
        this.productService.update$(this.form.value).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].ok) {
                _this.translate.get('Successfully Updated', { value: 'Successfully Updated' })
                    .subscribe(function (rest) {
                    _this.notification.success('', rest);
                });
                _this.close(res);
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_7__["CodeHttp"].notAcceptable) {
                _this.translate.get('The product already exists', {
                    value: 'The product already exists'
                })
                    .subscribe(function (rest) {
                    _this.notification.warning('', rest);
                });
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/products/modals/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.scss */ "./src/app/products/modals/edit-product/edit-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-blue/product-view-blue.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/products/product-view-blue/product-view-blue.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <app-page-header class=\"info-top\" [heading]=\"'Product Details'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <a routerLink=\"/products\">\n    <i class=\"fa fa-arrow-left\">&nbsp;&nbsp;{{ 'Back' | translate }}</i>\n  </a>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"container-fliud\">\n      <div class=\"wrapper row\">\n        <!-- PRODUCT IMAGE -->\n        <div class=\"preview col-md-6\">\n          <div class=\"preview-pic tab-content\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\"/>\n            </div>\n\n          </div>\n\n        </div>\n        <!--INFO-->\n        <div class=\"details col-md-6\">\n\n          <!-- PRODUCT NAME / PRICE-->\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"product-title\">{{ product.name }}</h4>\n              <h1 class=\"price\" [hidden]=\"product.priceSale===''\">\n                <span>${{ product.priceSale }}</span>\n              </h1>\n            </div>\n          </div>\n\n          <!--DESCRIPTION-->\n          <div>\n            <dt class=\"title\">{{ 'Description' | translate }}</dt>\n            <p class=\"info-content\">{{ product.description }}</p>\n          </div>\n\n          <!--CHARACTERISTICS-->\n          <div>\n            <dt class=\"title\">{{ 'Characteristics' | translate }}</dt>\n            <div class=\"info-content\" *ngFor=\"let characteristic of product.infoAditional[0].values\">\n              <a class=\"title\">{{ characteristic.title }}</a>:\n              <a>{{ characteristic.description }}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--MORE INFO-->\n      <div class=\"row more-info\">\n        <!--SPECIFICATIONS TECHNICALS / COMMENTS-->\n        <div class=\"col-md-6\">\n          <!--specifications technicals-->\n          <div class=\"col-md-12\">\n            <dt class=\"title\">{{ 'Technicals Specifications' | translate }}</dt>\n            <!--HEADER-->\n            <div class=\"row header\">\n              <div class=\"col-sm-4 title\">{{ 'Parameter' | translate }}</div>\n              <div class=\"col-sm-4 title\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"right\">{{ 'Eye Right' | translate }}</label>\n                </div>\n                <!--<input type=\"checkbox\" class=\"form-check-label\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"> {{ 'Eye Right' | translate }}-->\n              </div>\n              <div class=\"col-sm-4 title\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"left\">{{ 'Eye Left' | translate }}</label>\n                </div>\n               <!-- <input type=\"checkbox\" class=\"form-check-label\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"> {{ 'Eye Left' | translate }}-->\n              </div>\n            </div>\n\n            <!--CONTENT INFO-->\n            <div class=\"row content\">\n\n              <!--PARAM NAME-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row label\">\n                  <label class=\"form-check-label\">{{ 'Quantity' }}:</label>&nbsp;&nbsp;\n                </div>\n                <div *ngFor=\"let parameter of product.parametersRight\">\n                  <div>\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--Right Eye-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row selection\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"!product.eyeRight\">\n                </div>\n                <div *ngFor=\"let parameter of product.parametersRight\">\n                  <div>\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\"\n                          [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'input'\" class=\"select-values col-sm-9\">\n                          <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                          [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--Left Eye-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row selection\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"!product.eyeLeft\">\n                </div>\n                <div *ngFor=\"let parameter of product.parametersLeft\">\n                  <div>\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\" [(ngModel)]=\"parameter.sel\"\n                          bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'input'\" class=\"select-values col-sm-9\">\n                          <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                          [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n          <!--comments-->\n          <div class=\"col-md-12\">\n            <dt class=\"title\">{{ 'Comments' | translate }}</dt>\n\n            <!--HEADER-->\n            <div class=\"row header\">\n              <div class=\"col-sm-6 title\">{{ 'Right Eye' | translate }}</div>\n              <div class=\"col-sm-6 title\">{{ 'Left Eye' | translate }}</div>\n            </div>\n            <!--CONTENT-->\n            <div class=\"row content\">\n              <div class=\"col-md-6\">\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsRight\" [disabled]=\"!product.eyeRight\"\n                  placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n              </div>\n              <div class=\"col-md-6\">\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsLeft\" [disabled]=\"!product.eyeLeft\"\n                  placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n              </div>\n            </div>\n          </div>\n          <br>\n          <!--files-->\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <dt class=\"title\">{{ 'Documents' | translate }}</dt>\n                <div class=\"custom-file\">\n                  <input type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n                  <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n                  <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n                </div>\n              </div>\n              <br>\n              <div class=\"col-md-12\" style=\"margin-bottom: 40px\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th width=\"50%\">{{ 'Name' | translate }}</th>\n                      <th>{{ 'Size' | translate }}</th>\n                      <th>{{ 'Actions' | translate }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of uploader.queue\">\n                      <td><strong>{{ item?.file?.name }}</strong></td>\n                      <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                      <td nowrap>\n                        <!--<button type=\"button\" class=\"btn btn-success btn-xs\"\n                          (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                          <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>-->\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                          (click)=\"item.remove()\">\n                          <span class=\"glyphicon glyphicon-trash\"></span> {{ 'Remove' | translate }}\n                        </button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div>\n                  <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> {{ 'Remove all' | translate }}\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!--PROPERTIES / FILTERS / PATIENT / CLIENT-->\n        <div class=\"col-md-6\">\n          <!-- properties -->\n          <div class=\"row\">\n            <div class=\"item-properties col-md-5\">\n              <dt>{{ 'Properties' | translate }}</dt>\n              <p>\n                <img placement=\"top\" ngbTooltip=\"Toric\" class=\"alignleft wp-image-1358\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-02-150x150.png\"\n                  alt=\"Toric\" width=\"30\" height=\"30\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"Multifocal\" class=\"alignleft wp-image-1359\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-03-300x300.png\"\n                  alt=\"Multifocal\" width=\"30\" height=\"30\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"3-monthly\" class=\"wp-image-1389 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/10/íconos-09-273x300.png\"\n                  alt=\"\" width=\"30\" height=\"33\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"Sylicone Hydrogel\" class=\"wp-image-1362 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-06-250x300.png\"\n                  alt=\"\" width=\"28\" height=\"33\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"UV Filter\" class=\"wp-image-1364 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png\"\n                  alt=\"\" width=\"35\" height=\"33\" srcset=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png 300w, http://spctinternational.com/wp-content/uploads/2017/09/íconos-08.png 459w\"\n                  sizes=\"(max-width: 35px) 100vw, 35px\">&nbsp;\n              </p>\n            </div>\n            <!-- MATERIAL -->\n            <div class=\"col-md-4\">\n              <dt>Material</dt>\n              <dd>\n                <a>{{ product.material }}</a>\n              </dd>\n            </div>\n            <!-- PRODUCT SHEET -->\n            <div class=\"col-md-3\">\n              <dt>Product Sheet</dt>\n              <dd>\n                <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' }}</a>\n              </dd>\n            </div>\n            <!-- REPLACEMENT PERIOD -->\n            <div class=\"col-md-5\">\n              <dt>{{ 'Replacemente Period' | translate }}</dt>\n              <p>{{ product.replacementPeriod | translate }}</p>\n            </div>\n            <!-- WARRANTY -->\n            <div class=\"col-md-4\">\n              <dt>{{ 'Warranty' | translate }}</dt>\n              <p>{{ product.warranty }}</p>\n            </div>\n          </div>\n\n          <!--filters products\n          <dt class=\"filters\">{{ 'View more products' | translate }}</dt>\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <dt>{{ 'Category' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.category.name }}</a>\n            </div>\n            <div class=\"col-md-4\">\n              <dt>{{ 'Supplier' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.supplier.companyName }}</a>\n            </div>\n            <div class=\"col-md-3\">\n              <dt>{{ 'Product' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.father }}</a>\n            </div>\n          </div>-->\n\n          <!-- client -->\n          <div>\n            <dt class=\"title\">{{ 'Client' | translate }}</dt>\n            <div class=\"row\">\n              <!--name client-->\n              <div class=\"col-md-6\" [hidden]=\"user.role.idRole!==3\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\" [(ngModel)]=\"product.client\"\n                    disabled>\n                </div>\n              </div>\n              <div class=\"col-md-6\" [hidden]=\"user.role.idRole===3\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\" [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\"\n                     placeholder=\"{{ 'Select value' | translate }}\">\n                  </ng-select>\n                </div>\n              </div>\n              <!--shipping address-->\n              <div class=\"col-md-6\">\n                <span class=\"title\">{{ 'Shipping Address' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" disabled></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- patient -->\n          <div>\n            <dt class=\"title\">{{ 'Patient' | translate }}</dt>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\" [(ngModel)]=\"product.patient\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <br>\n\n      <div class=\"buy-btns\">\n        <button class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n          {{ 'Buy now' | translate }}\n        </button>\n        <button class=\"btn btn-lg btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(1)\" [disabled]=\"!formIsValid()\">\n          <i class=\"fa fa-cart-plus\"></i> Add to cart\n        </button>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-blue/product-view-blue.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/products/product-view-blue/product-view-blue.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n\n.select-values {\n  padding-left: 0px; }\n\n.card-body {\n  padding: 20px !important; }\n\n.gallery-wrap .img-big-wrap img {\n  height: 343px;\n  width: auto;\n  display: inline-block;\n  cursor: zoom-in; }\n\n.gallery-wrap .img-small-wrap .item-gallery {\n  width: 60px;\n  height: 60px;\n  border: 1px solid #ddd;\n  margin: 7px 2px;\n  display: inline-block;\n  overflow: hidden; }\n\n.gallery-wrap .img-small-wrap {\n  text-align: center; }\n\n.gallery-wrap .img-small-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  cursor: zoom-in; }\n\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\n\nimg {\n  max-width: 100%; }\n\n.preview {\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n\n.preview-pic {\n  flex-grow: 1; }\n\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px; }\n\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%; }\n\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block; }\n\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0; }\n\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0; }\n\n.tab-content {\n  overflow: hidden; }\n\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n\n.card {\n  background: #eee;\n  padding: 2em;\n  line-height: 1.5em; }\n\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n    margin-bottom: 10px; } }\n\n.details {\n  display: flex;\n  flex-direction: column; }\n\n.details > div:nth-child(2) {\n    padding-top: 20px; }\n\n.details > div:nth-child(3) {\n    padding-top: 35px; }\n\n.details > div:nth-child(3) .info-content {\n      margin-top: 10px; }\n\n.colors {\n  flex-grow: 1; }\n\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n\n.checked,\n.price span {\n  color: #ff9f1a; }\n\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n\n.product-title {\n  margin-top: 0; }\n\n.size {\n  margin-right: 10px; }\n\n.size:first-of-type {\n  margin-left: 40px; }\n\n.color {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px; }\n\n.color:first-of-type {\n  margin-left: 20px; }\n\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n\n.buy-btns {\n  text-align: right; }\n\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n\n.tooltip-inner {\n  padding: 1.3em; }\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.fa-arrow-left {\n  margin-top: 10px; }\n\n.title {\n  font-weight: 600; }\n\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n\n.item-properties img {\n  width: 30px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .header {\n  margin-left: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content {\n  margin-left: 25px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content .label {\n    margin-top: 17px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content .selection {\n    margin-top: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) {\n  margin-top: 35px;\n  margin-left: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) {\n    max-width: 48%; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) .header {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) .content {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(2) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) > div:nth-child(2) .row .title {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(3) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) > div:nth-child(3) .row .title {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) .filters {\n  margin-top: 10px; }\n\n.my-drop-zone {\n  border: dotted 3px lightgray; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n/* Default class applied to drop zones on over */\n\n.another-file-over-class {\n  border: dotted 3px green; }\n\n.custom-file-input {\n  cursor: pointer; }\n\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n"

/***/ }),

/***/ "./src/app/products/product-view-blue/product-view-blue.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/products/product-view-blue/product-view-blue.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductViewBlueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewBlueComponent", function() { return ProductViewBlueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-buy.component */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewBlueComponent = /** @class */ (function () {
    function ProductViewBlueComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.products = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        // Upload files
        this.listFileBasket = new Array;
        this.uploadResult = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResult) {
                _this.buildFileProductRequested();
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
        };
    }
    ProductViewBlueComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductViewBlueComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.getProductView();
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductViewBlueComponent.prototype.getProductView = function () {
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](-15, -0.25, 0.25)));
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        this.product.infoAditional = JSON.parse(this.product.infoAditional);
        this.product.priceSale = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewBlueComponent.prototype.changeSelect = function (eye, parameter, value) {
        parameter.selected = value;
        if (parameter.name === 'Warranty') {
            parameter.selected = parameter.selected === "Yes" ? true : false;
        }
    };
    /*setValuesAxesXtensa(eye, value) {
      if (eye === 'right') {
        this.paramAxesRight = _.find(this.product.parametersRight, { 'name': 'Axes (º)' });
        if (parseFloat(value) <= -3.25) {
          this.paramAxesRight.values = this.axesXtensa[0].values;
        } else {
          this.paramAxesRight.values = this.axesXtensa[1].values;
        }
      } else {
        this.paramAxesLeft = _.find(this.product.parametersLeft, { 'name': 'Axes (º)' });
        if (parseFloat(value) <= -3.25) {
          this.paramAxesLeft.values = this.axesXtensa[0].values;
        } else {
          this.paramAxesLeft.values = this.axesXtensa[1].values;
        }
      }
    }*/
    ProductViewBlueComponent.prototype.setValueEye = function (eye) {
        if (eye === "right") {
            this.product.eyeRight = !this.product.eyeRight;
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
        }
    };
    ProductViewBlueComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.product.eyeRight) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.product.eyeLeft) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewBlueComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
                    if (_this.product.supplier.idSupplier === 1) {
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.cardCode === null || u.cardCode === '');
                        });
                    }
                    else if (_this.product.supplier.idSupplier === 4) {
                        // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.certificationCode === null || u.certificationCode === '');
                        });
                    }
                    else {
                        _this.listCustomers = _this.listCustomersAux;
                    }
                }
            });
        }
    };
    ProductViewBlueComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
        }
    };
    ProductViewBlueComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewBlueComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewBlueComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.product.priceSale = this.product.price1;
                break;
            case 2:
                this.product.priceSale = this.product.price2;
                break;
            case 3:
                this.product.priceSale = this.product.price3;
                break;
        }
    };
    ProductViewBlueComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        var productsSelected = this.productsSelected;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = product.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersRight;
            }
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersLeft;
            }
            productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](productSelected, ['parameters', 'eye']);
        });
        return productsSelected;
    };
    ProductViewBlueComponent.prototype.addToCart = function (type) {
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        this.saveFiles();
        var productsRequested = [];
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
            productoSelect.idProduct = product.id;
            productRequest.product = productoSelect;
            productRequest.quantity = product.quantity;
            productRequest.price = product.price;
            productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
            productRequest.patient = product.patient;
            productRequest.observations = product.observations;
            productsRequested.push(productRequest);
        });
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
        this.openModal(type);
    };
    ProductViewBlueComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationBuyComponent"], { size: 'lg', windowClass: 'modal-content-border' });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.uploader = this.uploader;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewBlueComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient) {
            return false;
        }
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null) {
                    isValid = false;
                }
            });
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null) {
                    isValid = false;
                }
            });
        }
        return isValid;
    };
    ProductViewBlueComponent.prototype.saveFiles = function () {
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                item.upload();
            });
        }
    };
    ProductViewBlueComponent.prototype.buildFileProductRequested = function () {
        if (this.uploadResult.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__["FileProductRequested"]();
            debugger;
            fileProductRequest.url = this.uploadResult.response;
            fileProductRequest.name = this.uploadResult.item.file.name;
            fileProductRequest.size = this.uploadResult.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileBasket.push(fileProductRequest);
        }
        else {
            console.log('error file');
        }
    };
    ProductViewBlueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-blue',
            template: __webpack_require__(/*! ./product-view-blue.component.html */ "./src/app/products/product-view-blue/product-view-blue.component.html"),
            styles: [__webpack_require__(/*! ./product-view-blue.component.scss */ "./src/app/products/product-view-blue/product-view-blue.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_19__["FileProductRequestedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], ProductViewBlueComponent);
    return ProductViewBlueComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-euclid/product-view-euclid.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-euclid/product-view-euclid.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <app-page-header class=\"info-top\" [heading]=\"'Product Details'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <a routerLink=\"/products\">\n    <i class=\"fa fa-arrow-left\">&nbsp;&nbsp;{{ 'Back' | translate }}</i>\n  </a>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"container-fliud\">\n      <div class=\"wrapper row\">\n        <!-- PRODUCT IMAGE -->\n        <div class=\"preview col-md-6\">\n          <div class=\"preview-pic tab-content\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\"/>\n            </div>\n\n          </div>\n\n        </div>\n        <!--INFO-->\n        <div class=\"details col-md-6\">\n\n          <!-- PRODUCT NAME / PRICE-->\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"product-title\">{{ product.name }}</h4>\n              <h1 class=\"price\" [hidden]=\"product.priceSale===''\">\n                <span>${{ product.priceSale }}</span>\n              </h1>\n            </div>\n          </div>\n\n          <!--DESCRIPTION-->\n          <div>\n            <dt class=\"title\">{{ 'Description' | translate }}</dt>\n            <p class=\"info-content\">{{ product.description }}</p>\n          </div>\n\n          <!--CHARACTERISTICS-->\n          <div>\n            <dt class=\"title\">{{ 'Characteristics' | translate }}</dt>\n            <div class=\"info-content\" *ngFor=\"let characteristic of product.infoAditional[0].values\">\n              <a class=\"title\">{{ characteristic.title }}</a>:\n              <a>{{ characteristic.description }}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--MORE INFO-->\n      <div class=\"row more-info\">\n        <!--SPECIFICATIONS TECHNICALS / COMMENTS-->\n        <div class=\"col-md-6\">\n          <!--specifications technicals-->\n          <div class=\"col-md-12\">\n            <dt class=\"title\">{{ 'Technicals Specifications' | translate }}</dt>\n            <!--HEADER-->\n            <div class=\"row header\">\n              <div class=\"col-sm-4 title\">{{ 'Parameter' | translate }}</div>\n              <div class=\"col-sm-4 title\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"right\">{{ 'Eye Right' | translate }}</label>\n                </div>\n                <!--<input type=\"checkbox\" class=\"form-check-label\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"> {{ 'Eye Right' | translate }}-->\n              </div>\n              <div class=\"col-sm-4 title\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"left\">{{ 'Eye Left' | translate }}</label>\n                </div>\n               <!-- <input type=\"checkbox\" class=\"form-check-label\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"> {{ 'Eye Left' | translate }}-->\n              </div>\n            </div>\n\n            <!--CONTENT INFO-->\n            <div class=\"row content\">\n\n              <!--PARAM NAME-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row label\">\n                  <label class=\"form-check-label\">{{ 'Quantity' }}:</label>&nbsp;&nbsp;\n                </div>\n                <div *ngFor=\"let parameter of product.parametersRight\">\n                  <div>\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--Right Eye-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row selection\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"!product.eyeRight\">\n                </div>\n                <div *ngFor=\"let parameter of product.parametersRight\">\n                  <div>\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\"\n                          [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'input'\" class=\"select-values col-sm-9\">\n                          <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                          [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--Left Eye-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row selection\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"!product.eyeLeft\">\n                </div>\n                <div *ngFor=\"let parameter of product.parametersLeft\">\n                  <div>\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\" [(ngModel)]=\"parameter.sel\"\n                          bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'input'\" class=\"select-values col-sm-9\">\n                          <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                          [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n          <!--comments-->\n          <div class=\"col-md-12\">\n            <dt class=\"title\">{{ 'Comments' | translate }}</dt>\n\n            <!--HEADER-->\n            <div class=\"row header\">\n              <div class=\"col-sm-6 title\">{{ 'Right Eye' | translate }}</div>\n              <div class=\"col-sm-6 title\">{{ 'Left Eye' | translate }}</div>\n            </div>\n            <!--CONTENT-->\n            <div class=\"row content\">\n              <div class=\"col-md-6\">\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsRight\" [disabled]=\"!product.eyeRight\"\n                  placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n              </div>\n              <div class=\"col-md-6\">\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsLeft\" [disabled]=\"!product.eyeLeft\"\n                  placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n              </div>\n            </div>\n          </div>\n          <br>\n          <!--files-->\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <dt class=\"title\">{{ 'Documents' | translate }}</dt>\n                <div class=\"custom-file\">\n                  <input type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n                  <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n                  <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n                </div>\n              </div>\n              <br>\n              <div class=\"col-md-12\" style=\"margin-bottom: 40px\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th width=\"50%\">{{ 'Name' | translate }}</th>\n                      <th>{{ 'Size' | translate }}</th>\n                      <th>{{ 'Actions' | translate }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of uploader.queue\">\n                      <td><strong>{{ item?.file?.name }}</strong></td>\n                      <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                      <td nowrap>\n                        <!--<button type=\"button\" class=\"btn btn-success btn-xs\"\n                          (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                          <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>-->\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                          (click)=\"item.remove()\">\n                          <span class=\"glyphicon glyphicon-trash\"></span> {{ 'Remove' | translate }}\n                        </button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div>\n                  <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> {{ 'Remove all' | translate }}\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!--PROPERTIES / FILTERS / PATIENT / CLIENT-->\n        <div class=\"col-md-6\">\n          <!-- properties -->\n          <div class=\"row\">\n            <div class=\"item-properties col-md-5\">\n              <dt>{{ 'Properties' | translate }}</dt>\n              <p>\n                <img placement=\"top\" ngbTooltip=\"Toric\" class=\"alignleft wp-image-1358\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-02-150x150.png\"\n                  alt=\"Toric\" width=\"30\" height=\"30\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"Multifocal\" class=\"alignleft wp-image-1359\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-03-300x300.png\"\n                  alt=\"Multifocal\" width=\"30\" height=\"30\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"3-monthly\" class=\"wp-image-1389 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/10/íconos-09-273x300.png\"\n                  alt=\"\" width=\"30\" height=\"33\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"Sylicone Hydrogel\" class=\"wp-image-1362 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-06-250x300.png\"\n                  alt=\"\" width=\"28\" height=\"33\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"UV Filter\" class=\"wp-image-1364 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png\"\n                  alt=\"\" width=\"35\" height=\"33\" srcset=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png 300w, http://spctinternational.com/wp-content/uploads/2017/09/íconos-08.png 459w\"\n                  sizes=\"(max-width: 35px) 100vw, 35px\">&nbsp;\n              </p>\n            </div>\n            <!-- MATERIAL -->\n            <div class=\"col-md-4\">\n              <dt>Material</dt>\n              <dd>\n                <a>{{ product.material }}</a>\n              </dd>\n            </div>\n            <!-- PRODUCT SHEET -->\n            <div class=\"col-md-3\">\n              <dt>Product Sheet</dt>\n              <dd>\n                <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' }}</a>\n              </dd>\n            </div>\n            <!-- REPLACEMENT PERIOD -->\n            <div class=\"col-md-5\">\n              <dt>{{ 'Replacemente Period' | translate }}</dt>\n              <p>{{ product.replacementPeriod | translate }}</p>\n            </div>\n            <!-- WARRANTY -->\n            <div class=\"col-md-4\">\n              <dt>{{ 'Warranty' | translate }}</dt>\n              <p>{{ product.warranty }}</p>\n            </div>\n          </div>\n\n          <!--filters products\n          <dt class=\"filters\">{{ 'View more products' | translate }}</dt>\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <dt>{{ 'Category' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.category.name }}</a>\n            </div>\n            <div class=\"col-md-4\">\n              <dt>{{ 'Supplier' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.supplier.companyName }}</a>\n            </div>\n            <div class=\"col-md-3\">\n              <dt>{{ 'Product' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.father }}</a>\n            </div>\n          </div>-->\n\n          <!-- client -->\n          <div>\n            <dt class=\"title\">{{ 'Client' | translate }}</dt>\n            <div class=\"row\">\n              <!--name client-->\n              <div class=\"col-md-6\" [hidden]=\"user.role.idRole!==3\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\" [(ngModel)]=\"product.client\"\n                    disabled>\n                </div>\n              </div>\n              <div class=\"col-md-6\" [hidden]=\"user.role.idRole===3\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\" [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\"\n                     placeholder=\"{{ 'Select value' | translate }}\">\n                  </ng-select>\n                </div>\n              </div>\n              <!--shipping address-->\n              <div class=\"col-md-6\">\n                <span class=\"title\">{{ 'Shipping Address' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" disabled></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- patient -->\n          <div>\n            <dt class=\"title\">{{ 'Patient' | translate }}</dt>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\" [(ngModel)]=\"product.patient\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <br>\n\n      <div class=\"buy-btns\">\n        <button class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n          {{ 'Buy now' | translate }}\n        </button>\n        <button class=\"btn btn-lg btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(1)\" [disabled]=\"!formIsValid()\">\n          <i class=\"fa fa-cart-plus\"></i> Add to cart\n        </button>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-euclid/product-view-euclid.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-euclid/product-view-euclid.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n\n.select-values {\n  padding-left: 0px; }\n\n.card-body {\n  padding: 20px !important; }\n\n.gallery-wrap .img-big-wrap img {\n  height: 343px;\n  width: auto;\n  display: inline-block;\n  cursor: zoom-in; }\n\n.gallery-wrap .img-small-wrap .item-gallery {\n  width: 60px;\n  height: 60px;\n  border: 1px solid #ddd;\n  margin: 7px 2px;\n  display: inline-block;\n  overflow: hidden; }\n\n.gallery-wrap .img-small-wrap {\n  text-align: center; }\n\n.gallery-wrap .img-small-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  cursor: zoom-in; }\n\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\n\nimg {\n  max-width: 100%; }\n\n.preview {\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n\n.preview-pic {\n  flex-grow: 1; }\n\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px; }\n\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%; }\n\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block; }\n\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0; }\n\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0; }\n\n.tab-content {\n  overflow: hidden; }\n\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n\n.card {\n  background: #eee;\n  padding: 2em;\n  line-height: 1.5em; }\n\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n    margin-bottom: 10px; } }\n\n.details {\n  display: flex;\n  flex-direction: column; }\n\n.details > div:nth-child(2) {\n    padding-top: 20px; }\n\n.details > div:nth-child(3) {\n    padding-top: 35px; }\n\n.details > div:nth-child(3) .info-content {\n      margin-top: 10px; }\n\n.colors {\n  flex-grow: 1; }\n\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n\n.checked,\n.price span {\n  color: #ff9f1a; }\n\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n\n.product-title {\n  margin-top: 0; }\n\n.size {\n  margin-right: 10px; }\n\n.size:first-of-type {\n  margin-left: 40px; }\n\n.color {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px; }\n\n.color:first-of-type {\n  margin-left: 20px; }\n\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n\n.buy-btns {\n  text-align: right; }\n\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n\n.tooltip-inner {\n  padding: 1.3em; }\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.fa-arrow-left {\n  margin-top: 10px; }\n\n.title {\n  font-weight: 600; }\n\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n\n.item-properties img {\n  width: 30px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .header {\n  margin-left: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content {\n  margin-left: 25px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content .label {\n    margin-top: 17px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content .selection {\n    margin-top: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) {\n  margin-top: 35px;\n  margin-left: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) {\n    max-width: 48%; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) .header {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) .content {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(2) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) > div:nth-child(2) .row .title {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(3) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) > div:nth-child(3) .row .title {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) .filters {\n  margin-top: 10px; }\n\n.my-drop-zone {\n  border: dotted 3px lightgray; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n/* Default class applied to drop zones on over */\n\n.another-file-over-class {\n  border: dotted 3px green; }\n\n.custom-file-input {\n  cursor: pointer; }\n\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n"

/***/ }),

/***/ "./src/app/products/product-view-euclid/product-view-euclid.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/products/product-view-euclid/product-view-euclid.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductViewEuclidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewEuclidComponent", function() { return ProductViewEuclidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-buy.component */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewEuclidComponent = /** @class */ (function () {
    function ProductViewEuclidComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.products = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        // Upload files
        this.listFileBasket = new Array;
        this.uploadResult = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResult) {
                _this.buildFileProductRequested();
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
        };
    }
    ProductViewEuclidComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductViewEuclidComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.getProductView();
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductViewEuclidComponent.prototype.getProductView = function () {
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](-15, -0.25, 0.25)));
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        this.product.infoAditional = JSON.parse(this.product.infoAditional);
        this.product.priceSale = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewEuclidComponent.prototype.changeSelect = function (eye, parameter, value) {
        parameter.selected = value;
        if (parameter.name === 'Warranty') {
            parameter.selected = parameter.selected === "Yes" ? true : false;
        }
    };
    /*setValuesAxesXtensa(eye, value) {
      if (eye === 'right') {
        this.paramAxesRight = _.find(this.product.parametersRight, { 'name': 'Axes (º)' });
        if (parseFloat(value) <= -3.25) {
          this.paramAxesRight.values = this.axesXtensa[0].values;
        } else {
          this.paramAxesRight.values = this.axesXtensa[1].values;
        }
      } else {
        this.paramAxesLeft = _.find(this.product.parametersLeft, { 'name': 'Axes (º)' });
        if (parseFloat(value) <= -3.25) {
          this.paramAxesLeft.values = this.axesXtensa[0].values;
        } else {
          this.paramAxesLeft.values = this.axesXtensa[1].values;
        }
      }
    }*/
    ProductViewEuclidComponent.prototype.setValueEye = function (eye) {
        if (eye === "right") {
            this.product.eyeRight = !this.product.eyeRight;
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
        }
    };
    ProductViewEuclidComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.product.eyeRight) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.product.eyeLeft) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewEuclidComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
                    if (_this.product.supplier.idSupplier === 1) {
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.cardCode === null || u.cardCode === '');
                        });
                    }
                    else if (_this.product.supplier.idSupplier === 4) {
                        // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.certificationCode === null || u.certificationCode === '');
                        });
                    }
                    else {
                        _this.listCustomers = _this.listCustomersAux;
                    }
                }
            });
        }
    };
    ProductViewEuclidComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
        }
    };
    ProductViewEuclidComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewEuclidComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewEuclidComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.product.priceSale = this.product.price1;
                break;
            case 2:
                this.product.priceSale = this.product.price2;
                break;
            case 3:
                this.product.priceSale = this.product.price3;
                break;
        }
    };
    ProductViewEuclidComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        var productsSelected = this.productsSelected;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = product.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersRight;
            }
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersLeft;
            }
            productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](productSelected, ['parameters', 'eye']);
        });
        return productsSelected;
    };
    ProductViewEuclidComponent.prototype.addToCart = function (type) {
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        this.saveFiles();
        var productsRequested = [];
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
            productoSelect.idProduct = product.id;
            productRequest.product = productoSelect;
            productRequest.quantity = product.quantity;
            productRequest.price = product.price;
            productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
            productRequest.patient = product.patient;
            productRequest.observations = product.observations;
            productsRequested.push(productRequest);
        });
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
        this.openModal(type);
    };
    ProductViewEuclidComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationBuyComponent"], { size: 'lg', windowClass: 'modal-content-border' });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.uploader = this.uploader;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewEuclidComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient) {
            return false;
        }
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null) {
                    isValid = false;
                }
            });
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null) {
                    isValid = false;
                }
            });
        }
        return isValid;
    };
    ProductViewEuclidComponent.prototype.saveFiles = function () {
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                item.upload();
            });
        }
    };
    ProductViewEuclidComponent.prototype.buildFileProductRequested = function () {
        if (this.uploadResult.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__["FileProductRequested"]();
            debugger;
            fileProductRequest.url = this.uploadResult.response;
            fileProductRequest.name = this.uploadResult.item.file.name;
            fileProductRequest.size = this.uploadResult.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileBasket.push(fileProductRequest);
        }
        else {
            console.log('error file');
        }
    };
    ProductViewEuclidComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-euclid',
            template: __webpack_require__(/*! ./product-view-euclid.component.html */ "./src/app/products/product-view-euclid/product-view-euclid.component.html"),
            styles: [__webpack_require__(/*! ./product-view-euclid.component.scss */ "./src/app/products/product-view-euclid/product-view-euclid.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_19__["FileProductRequestedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], ProductViewEuclidComponent);
    return ProductViewEuclidComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-europa/product-view-europa.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-europa/product-view-europa.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <app-page-header class=\"info-top\" [heading]=\"'Product Details'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <a routerLink=\"/products\">\n    <i class=\"fa fa-arrow-left\">&nbsp;&nbsp;{{ 'Back' | translate }}</i>\n  </a>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"container-fliud\">\n      <div class=\"wrapper row\">\n        <!-- PRODUCT IMAGE -->\n        <div class=\"preview col-md-6\">\n          <div class=\"preview-pic tab-content\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\" />\n            </div>\n\n          </div>\n\n        </div>\n        <!--INFO-->\n        <div class=\"details col-md-6\">\n\n          <!-- PRODUCT NAME / PRICE-->\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"product-title\">{{ product.name }}</h4>\n              <h1 class=\"price\" [hidden]=\"product.priceSale===''\">\n                <span>${{ product.priceSale }}</span>\n              </h1>\n            </div>\n          </div>\n\n          <!--DESCRIPTION-->\n          <div>\n            <dt class=\"title\">{{ 'Description' | translate }}</dt>\n            <p class=\"info-content\">{{ product.description }}</p>\n          </div>\n\n\n        </div>\n      </div>\n\n      <!--MORE INFO-->\n      <div class=\"row more-info\">\n        <!--SPECIFICATIONS TECHNICALS / COMMENTS-->\n        <div class=\"col-md-6\">\n\n          <!--header-->\n          <div class=\"col-md-12\">\n            <dt class=\"title\">{{ 'Technicals Specifications' | translate }}</dt>\n            <!--HEADER-->\n            <div class=\"row header\">\n              <div class=\"col-sm-4 title\">{{ 'Parameter' | translate }}</div>\n              <div class=\"col-sm-4 title\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"right\">{{ 'Eye Right' | translate }}</label>\n                </div>\n                <!--<input type=\"checkbox\" class=\"form-check-label\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"> {{ 'Eye Right' | translate }}-->\n              </div>\n              <div class=\"col-sm-4 title\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"left\">{{ 'Eye Left' | translate }}</label>\n                </div>\n                <!--<input type=\"checkbox\" class=\"form-check-label\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"> {{ 'Eye Left' | translate }}-->\n              </div>\n            </div>\n\n            <!--quantity / contamac / hydrapeg / insertors-->\n            <div class=\"col-md-12\">\n              <div class=\"row content\">\n\n                <!--PARAM NAME-->\n                <div class=\"col-sm-4 title\">\n                  <div class=\"row label\">\n                    <label class=\"form-check-label\">{{ 'Quantity' }}:</label>&nbsp;&nbsp;\n                  </div>\n                  <div *ngFor=\"let header of product.headerRight\">\n                    <div *ngIf=\"header.values && header.values.length > 0\">\n                      <div class=\"row label\">\n                        <label class=\"form-check-label\">{{ header.name }}:</label>&nbsp;&nbsp;\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!--Right Eye-->\n                <div class=\"col-sm-4 title\">\n                  <div class=\"row selection\">\n                    <input class=\"form-control col-sm-9\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\" oninput=\"validity.valid||(value='');\"\n                      [disabled]=\"!product.eyeRight\">\n                  </div>\n                  <div *ngFor=\"let header of product.headerRight\">\n                    <div *ngIf=\"header.values && header.values.length > 0\">\n                      <div class=\"row selection\">\n                        <div *ngIf=\"header.type === 'selected'\" class=\"select-values col-sm-10\">\n                          <ng-select (change)=\"changeSelect('right', header, $event)\" [items]=\"header.values\" [disabled]=\"!product.eyeRight\"\n                            [(ngModel)]=\"header.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                            {{item}}\n                          </ng-select>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!--Left Eye-->\n                <div class=\"col-sm-4 title\">\n                  <div class=\"row selection\">\n                    <input class=\"form-control col-sm-9\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\" oninput=\"validity.valid||(value='');\"\n                      [disabled]=\"!product.eyeLeft\">\n                  </div>\n                  <div *ngFor=\"let header of product.headerLeft\">\n                    <div *ngIf=\"header.values && header.values.length > 0\">\n                      <div class=\"row selection\">\n                        <div *ngIf=\"header.type === 'selected'\" class=\"select-values col-sm-10\">\n                          <ng-select (change)=\"changeSelect('left', header, $event)\" [items]=\"header.values\" [disabled]=\"!product.eyeLeft\" [(ngModel)]=\"header.sel\"\n                            bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                            {{item}}\n                          </ng-select>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n            <!--params-->\n            <div class=\"col-md-12\">\n\n              <!--CONTENT INFO-->\n              <div class=\"row content\">\n\n                <!--PARAM NAME-->\n                <div class=\"col-sm-4 title\">\n                  <div *ngFor=\"let parameter of product.parametersRight\">\n                    <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                      <div class=\"row label\">\n                        <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!--Right Eye-->\n                <div class=\"col-sm-4 title\">\n                  <div *ngFor=\"let parameter of product.parametersRight\">\n                    <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                      <div class=\"row selection\">\n                        <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-10\">\n                          <ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\"\n                            [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                            {{item}}\n                          </ng-select>\n                        </div>\n\n                        <div *ngIf=\"parameter.type === 'input'\" class=\"select-values col-sm-10\">\n                            <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                            [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n                        </div>\n\n                        <div *ngIf=\"parameter.type === 'selected-double'\" class=\"select-values col-sm-10\">\n                          <div class=\"row selected-double\">\n                            <div class=\"col-sm-6\">\n                              <!--<ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values[0].values\" [disabled]=\"!product.eyeRight\"\n                                [(ngModel)]=\"parameter.values[0].selected\" bindLabel=\"item\" ng-pla bindValue=\"item\" placeholder=\"{{ 'depth' | translate }}\">\n                                {{item}}\n                              </ng-select>-->\n                              <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[0].placeholder | translate }}\"\n                                     [(ngModel)]=\"parameter.values[0].selected\" (change)=\"setNotch(parameter)\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n                            </div>\n                            <div class=\"col-sm-6\">\n                              <!--<ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values[1].values\" [disabled]=\"!product.eyeRight\"\n                                [(ngModel)]=\"parameter.values[1].selected\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'length' | translate }}\">\n                                {{item}}\n                              </ng-select>-->\n                              <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[1].placeholder | translate }}\"\n                                     [(ngModel)]=\"parameter.values[1].selected\" (change)=\"setNotch(parameter)\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeRight\">\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!--Left Eye-->\n                <div class=\"col-sm-4 title\">\n                  <div *ngFor=\"let parameter of product.parametersLeft\">\n                    <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                      <div class=\"row selection\">\n                        <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-10\">\n                          <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\" [(ngModel)]=\"parameter.sel\"\n                            bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                            {{item}}\n                          </ng-select>\n                        </div>\n\n                        <div *ngIf=\"parameter.type === 'input'\" class=\"select-values col-sm-10\">\n                            <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.placeholder | translate }}\"\n                            [(ngModel)]=\"parameter.selected\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                        </div>\n\n                        <div *ngIf=\"parameter.type === 'selected-double'\" class=\"select-values col-sm-10\">\n                          <div class=\"row selected-double\">\n                            <div class=\"col-sm-6\">\n                              <!--<ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values[0].values\" [disabled]=\"!product.eyeRight\"\n                                [(ngModel)]=\"parameter.values[0].selected\" bindLabel=\"item\" ng-pla bindValue=\"item\" placeholder=\"{{ 'depth' | translate }}\">\n                                {{item}}\n                              </ng-select>-->\n                              <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[0].placeholder | translate }}\"\n                                     [(ngModel)]=\"parameter.values[0].selected\" (change)=\"setNotch(parameter)\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                            </div>\n                            <div class=\"col-sm-6\">\n                              <!--<ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values[1].values\" [disabled]=\"!product.eyeRight\"\n                                [(ngModel)]=\"parameter.values[1].selected\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'length' | translate }}\">\n                                {{item}}\n                              </ng-select>-->\n                              <input class=\"form-control\" type=\"number\" placeholder=\"{{ parameter.values[1].placeholder | translate }}\"\n                                     [(ngModel)]=\"parameter.values[1].selected\" (change)=\"setNotch(parameter)\" oninput=\"validity.valid||(value='');\" [disabled]=\"!product.eyeLeft\">\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n            <!--steps-->\n            <div class=\"col-md-12\">\n\n              <!--CONTENT INFO-->\n              <div class=\"row content-steps\">\n\n                <!--PARAM NAME-->\n                <div class=\"col-sm-4 title\">\n                  <div *ngFor=\"let PC of product.pasosRight\">\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ PC.name }}:</label>&nbsp;&nbsp;\n                      <div class=\"col-md-12 sub-label\" *ngFor=\"let paso of PC.values\">\n                        <label class=\"form-check-label\">{{ paso.name }}:</label>&nbsp;&nbsp;\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!--Right Eye-->\n                <div class=\"col-sm-4 title\">\n                  <div *ngFor=\"let PC of product.pasosRight\">\n                    <div *ngFor=\"let paso of PC.values\">\n                      <div class=\"row selection\">\n                        <div *ngFor=\"let value of paso.values\" class=\"custom-control custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\" id=\"{{ 'right' + PC.name + paso.name + value.name }}\" [(ngModel)]=\"value.selected\" (click)=\"setChecked(value, paso)\">\n                          <label class=\"custom-control-label\" for=\"{{ 'right'  + PC.name + paso.name + value.name }}\">{{ value.name }}</label>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!--Left Eye-->\n                <div class=\"col-sm-4 title\">\n                  <div *ngFor=\"let PC of product.pasosLeft\">\n                    <div *ngFor=\"let paso of PC.values\">\n                      <div class=\"row selection\">\n                        <div *ngFor=\"let value of paso.values\" class=\"custom-control custom-checkbox\">\n                          <input class=\"custom-control-input\" type=\"checkbox\" id=\"{{ 'left'  + PC.name + paso.name + value.name }}\" [(ngModel)]=\"value.selected\" (click)=\"setChecked(value, paso)\">\n                          <label class=\"custom-control-label\" for=\"{{ 'left'  + PC.name + paso.name + value.name }}\">{{ value.name }}</label>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n\n            </div>\n\n\n          </div>\n        </div>\n\n        <!--PROPERTIES / FILTERS / PATIENT / CLIENT-->\n        <div class=\"col-md-6\">\n\n          <!--CHARACTERISTICS-->\n          <div>\n            <dt class=\"title\">{{ 'Characteristics' | translate }}</dt>\n            <div class=\"info-content\" *ngFor=\"let characteristic of product.infoAditional[0].values\">\n              <a class=\"title\">{{ characteristic.title }}</a>\n              <a>{{ characteristic.description }}</a>\n            </div>\n          </div>\n\n          <!-- properties -->\n          <div class=\"row\">\n            <div class=\"item-properties col-md-5\">\n              <dt>{{ 'Properties' | translate }}</dt>\n              <p>\n                <img placement=\"top\" ngbTooltip=\"Toric\" class=\"alignleft wp-image-1358\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-02-150x150.png\"\n                  alt=\"Toric\" width=\"30\" height=\"30\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"Multifocal\" class=\"alignleft wp-image-1359\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-03-300x300.png\"\n                  alt=\"Multifocal\" width=\"30\" height=\"30\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"3-monthly\" class=\"wp-image-1389 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/10/íconos-09-273x300.png\"\n                  alt=\"\" width=\"30\" height=\"33\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"Sylicone Hydrogel\" class=\"wp-image-1362 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-06-250x300.png\"\n                  alt=\"\" width=\"28\" height=\"33\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"UV Filter\" class=\"wp-image-1364 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png\"\n                  alt=\"\" width=\"35\" height=\"33\" srcset=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png 300w, http://spctinternational.com/wp-content/uploads/2017/09/íconos-08.png 459w\"\n                  sizes=\"(max-width: 35px) 100vw, 35px\">&nbsp;\n              </p>\n            </div>\n            <!-- MATERIAL -->\n            <div class=\"col-md-4\">\n              <dt>Material</dt>\n              <dd>\n                <a>{{ product.material }}</a>\n              </dd>\n            </div>\n            <!-- PRODUCT SHEET -->\n            <div class=\"col-md-3\">\n              <dt>Product Sheet</dt>\n              <dd>\n                <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' }}</a>\n              </dd>\n            </div>\n            <!-- REPLACEMENT PERIOD -->\n            <div class=\"col-md-5\">\n              <dt>{{ 'Replacemente Period' | translate }}</dt>\n              <p>{{ product.replacementPeriod | translate }}</p>\n            </div>\n            <!-- WARRANTY -->\n            <div class=\"col-md-4\">\n              <dt>{{ 'Warranty' | translate }}</dt>\n              <p>{{ product.warranty }}</p>\n            </div>\n          </div>\n\n          <!-- client -->\n          <div>\n            <dt class=\"title\">{{ 'Client' | translate }}</dt>\n            <div class=\"row\">\n              <!--name client-->\n              <div class=\"col-md-6\" [hidden]=\"user.role.idRole!==3\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\" [(ngModel)]=\"product.client\"\n                    disabled>\n                </div>\n              </div>\n              <div class=\"col-md-6\" [hidden]=\"user.role.idRole===3\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\" [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\"\n                     placeholder=\"{{ 'Select value' | translate }}\">\n                  </ng-select>\n                </div>\n              </div>\n              <!--shipping address-->\n              <div class=\"col-md-6\">\n                <span class=\"title\">{{ 'Shipping Address' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" disabled></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- patient -->\n          <div>\n            <dt class=\"title\">{{ 'Patient' | translate }}</dt>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\" [(ngModel)]=\"product.patient\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!--comments-->\n          <div>\n            <dt class=\"title\">{{ 'Comments' | translate }}</dt>\n\n            <!--HEADER-->\n            <div class=\"row header\">\n              <div class=\"col-sm-6 title\">{{ 'Right Eye' | translate }}</div>\n              <div class=\"col-sm-5 title\">{{ 'Left Eye' | translate }}</div>\n            </div>\n            <!--CONTENT-->\n            <div class=\"row content\">\n              <div class=\"col-md-6\">\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsRight\" [disabled]=\"!product.eyeRight\"\n                  placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n              </div>\n              <div class=\"col-md-6\">\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsLeft\" [disabled]=\"!product.eyeLeft\"\n                  placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <br>\n\n      <div class=\"buy-btns\">\n        <button class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n          {{ 'Buy now' | translate }}\n        </button>\n        <button class=\"btn btn-lg btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(1)\" [disabled]=\"!formIsValid()\">\n          <i class=\"fa fa-cart-plus\"></i> Add to cart\n        </button>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-europa/product-view-europa.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-europa/product-view-europa.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n\n.select-values {\n  padding-left: 0px; }\n\n.card-body {\n  padding: 20px !important; }\n\n.gallery-wrap .img-big-wrap img {\n  height: 343px;\n  width: auto;\n  display: inline-block;\n  cursor: zoom-in; }\n\n.gallery-wrap .img-small-wrap .item-gallery {\n  width: 60px;\n  height: 60px;\n  border: 1px solid #ddd;\n  margin: 7px 2px;\n  display: inline-block;\n  overflow: hidden; }\n\n.gallery-wrap .img-small-wrap {\n  text-align: center; }\n\n.gallery-wrap .img-small-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  cursor: zoom-in; }\n\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\n\nimg {\n  max-width: 100%; }\n\n.preview {\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n\n.preview-pic {\n  flex-grow: 1; }\n\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px; }\n\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%; }\n\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block; }\n\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0; }\n\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0; }\n\n.tab-content {\n  overflow: hidden; }\n\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n\n.card {\n  background: #eee;\n  padding: 2em;\n  line-height: 1.5em; }\n\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n    margin-bottom: 10px; } }\n\n.details {\n  display: flex;\n  flex-direction: column; }\n\n.details > div:nth-child(2) {\n    padding-top: 20px; }\n\n.details > div:nth-child(3) {\n    padding-top: 35px; }\n\n.details > div:nth-child(3) .info-content {\n      margin-top: 10px; }\n\n.colors {\n  flex-grow: 1; }\n\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n\n.checked,\n.price span {\n  color: #ff9f1a; }\n\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n\n.product-title {\n  margin-top: 0; }\n\n.size {\n  margin-right: 10px; }\n\n.size:first-of-type {\n  margin-left: 40px; }\n\n.color {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px; }\n\n.color:first-of-type {\n  margin-left: 20px; }\n\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n\n.buy-btns {\n  text-align: right; }\n\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n\n.tooltip-inner {\n  padding: 1.3em; }\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.fa-arrow-left {\n  margin-top: 10px; }\n\n.title {\n  font-weight: 600; }\n\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px;\n  line-height: 30px; }\n\n.item-properties img {\n  width: 30px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .header {\n  margin-left: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content {\n  margin-left: 25px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content .label {\n    margin-top: 17px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content .selection {\n    margin-top: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(3), .more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4), .more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) {\n  padding-left: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) .content-steps, .more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) .content-steps, .more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) .content-steps {\n    margin-left: 25px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) .content-steps .label, .more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) .content-steps .label, .more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) .content-steps .label {\n      margin-top: 17px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) .content-steps .sub-label, .more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) .content-steps .sub-label, .more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) .content-steps .sub-label {\n      margin-top: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) .content-steps .selection, .more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) .content-steps .selection, .more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) .content-steps .selection {\n      margin-top: 5px; }\n\n.more-info > div:nth-child(2) > div:nth-child(2) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) > div:nth-child(2) .row .title {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(3) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) > div:nth-child(3) .row .title {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) .title {\n  margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(5) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) .filters {\n  margin-top: 10px; }\n\n.more-info .radio-scleral {\n  margin-top: 10px;\n  width: 120px;\n  display: flex;\n  justify-content: space-between; }\n\n.check-steps {\n  display: flex; }\n\n.check-steps > input:nth-child(1) {\n    width: 20px;\n    height: 10px;\n    margin-left: 20px; }\n\n.content-steps > div:nth-child(2) > div:nth-child(1), .content-steps > div:nth-child(2) > div:nth-child(2), .content-steps > div:nth-child(2) > div:nth-child(3), .content-steps > div:nth-child(3) > div:nth-child(1), .content-steps > div:nth-child(3) > div:nth-child(2), .content-steps > div:nth-child(3) > div:nth-child(3) {\n  padding-top: 40px; }\n\n.content-steps > div:nth-child(2) > div:nth-child(1) .selection > div:nth-child(1), .content-steps > div:nth-child(2) > div:nth-child(2) .selection > div:nth-child(1), .content-steps > div:nth-child(2) > div:nth-child(3) .selection > div:nth-child(1), .content-steps > div:nth-child(3) > div:nth-child(1) .selection > div:nth-child(1), .content-steps > div:nth-child(3) > div:nth-child(2) .selection > div:nth-child(1), .content-steps > div:nth-child(3) > div:nth-child(3) .selection > div:nth-child(1) {\n    padding-right: 1.5rem; }\n\n.selected-double > div:nth-child(1) {\n  padding-right: 0px; }\n\n.selected-double > div:nth-child(2) {\n  padding-left: 2px; }\n\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n"

/***/ }),

/***/ "./src/app/products/product-view-europa/product-view-europa.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/products/product-view-europa/product-view-europa.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductViewEuropaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewEuropaComponent", function() { return ProductViewEuropaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-buy.component */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ProductViewEuropaComponent = /** @class */ (function () {
    function ProductViewEuropaComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, modalService, router, alertify, notification, translate) {
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.modalService = modalService;
        this.router = router;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.products = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ProductViewEuropaComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductViewEuropaComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.getProductView();
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductViewEuropaComponent.prototype.getProductView = function () {
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](4, 10, 0.5)));
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        this.product.headerRight = JSON.parse(this.product.types)[0].header;
        this.product.headerLeft = JSON.parse(this.product.types)[0].header;
        this.product.pasosRight = JSON.parse(this.product.types)[0].pasos;
        this.product.pasosLeft = JSON.parse(this.product.types)[0].pasos;
        this.product.infoAditional = JSON.parse(this.product.infoAditional);
        this.product.priceSale = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewEuropaComponent.prototype.changeSelect = function (eye, parameter, value) {
        parameter.selected = value;
        if (parameter.name === 'Hidrapeg' || parameter.name === 'Inserts') {
            parameter.selected = parameter.selected === "Yes" ? true : false;
        }
    };
    ProductViewEuropaComponent.prototype.setValueEye = function (eye) {
        if (eye === "right") {
            this.product.eyeRight = !this.product.eyeRight;
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
        }
    };
    ProductViewEuropaComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.product.eyeRight) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.product.eyeLeft) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewEuropaComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
                    _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                        return !(u.cardCode === null || u.cardCode === '');
                    });
                    // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                    // todavia no se agregado ese campo en la bd
                }
            });
        }
    };
    ProductViewEuropaComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
        }
    };
    ProductViewEuropaComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewEuropaComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewEuropaComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.product.priceSale = this.product.price1;
                break;
            case 2:
                this.product.priceSale = this.product.price2;
                break;
            case 3:
                this.product.priceSale = this.product.price3;
                break;
        }
    };
    ProductViewEuropaComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        var productsSelected = this.productsSelected;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = product.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                /* headers*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.headerRight, function (parameter, index) {
                    product.headerRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel']);
                });
                productSelected.header = product.headerRight;
                /*params*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersRight;
                /*steps*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.pasosRight, function (PC) {
                    lodash__WEBPACK_IMPORTED_MODULE_1__["each"](PC.values, function (step) {
                        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](step.values, function (value, index) {
                            step.values[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](value, ['type', 'sel']);
                        });
                    });
                });
                productSelected.pasos = product.pasosRight;
            }
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                /* headers*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.headerLeft, function (parameter, index) {
                    product.headerLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel']);
                });
                productSelected.header = product.headerLeft;
                /*params*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel', 'placeholder']);
                });
                productSelected.parameters = product.parametersLeft;
                /*steps*/
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.pasosLeft, function (PC) {
                    lodash__WEBPACK_IMPORTED_MODULE_1__["each"](PC.values, function (step) {
                        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](step.values, function (value, index) {
                            step.values[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](value, ['type', 'sel']);
                        });
                    });
                });
                productSelected.pasos = product.pasosLeft;
            }
            productSelected.detail = { name: product.type, eye: productSelected.eye, header: productSelected.header, parameters: productSelected.parameters, pasos: productSelected.pasos };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](productSelected, ['parameters', 'eye', 'pasos', 'header']);
        });
        return productsSelected;
    };
    ProductViewEuropaComponent.prototype.addToCart = function (type) {
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        var productsRequested = [];
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
            productoSelect.idProduct = product.id;
            productRequest.product = productoSelect;
            productRequest.quantity = product.quantity;
            productRequest.price = product.price;
            productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
            productRequest.patient = product.patient;
            productRequest.observations = product.observations;
            productsRequested.push(productRequest);
        });
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        this.openModal(type);
    };
    ProductViewEuropaComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationBuyComponent"], { size: 'lg', windowClass: 'modal-content-border' });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.result.then(function (result) {
            _this.getProducts();
        }, function (reason) {
            //dismiss
        });
    };
    ProductViewEuropaComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient) {
            return false;
        }
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null) {
                    isValid = false;
                }
            });
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null) {
                    isValid = false;
                }
            });
        }
        return isValid;
    };
    ProductViewEuropaComponent.prototype.setChecked = function (value, header) {
        value.selected = !value.selected;
    };
    ProductViewEuropaComponent.prototype.setNotch = function (parameter) {
        if (parameter.values[0].selected === null || parameter.values[1].selected === null) {
            parameter.selected = null;
        }
        else {
            parameter.selected = parameter.values[0].selected + 'x' + parameter.values[1].selected;
        }
    };
    ProductViewEuropaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-europa',
            template: __webpack_require__(/*! ./product-view-europa.component.html */ "./src/app/products/product-view-europa/product-view-europa.component.html"),
            styles: [__webpack_require__(/*! ./product-view-europa.component.scss */ "./src/app/products/product-view-europa/product-view-europa.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], ProductViewEuropaComponent);
    return ProductViewEuropaComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view-magicLook/product-view-magic.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/products/product-view-magicLook/product-view-magic.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <app-page-header class=\"info-top\" [heading]=\"'Product Details'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <a routerLink=\"/products\">\n    <i class=\"fa fa-arrow-left\">&nbsp;&nbsp;{{ 'Back' | translate }}</i>\n  </a>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"container-fliud\">\n      <div class=\"wrapper row\">\n        <!-- PRODUCT IMAGE -->\n        <div class=\"preview col-md-6\">\n          <div class=\"preview-pic tab-content\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\"/>\n            </div>\n\n          </div>\n\n        </div>\n        <!--INFO-->\n        <div class=\"details col-md-6\">\n\n          <!-- PRODUCT NAME / PRICE-->\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"product-title\">{{ product.name }}</h4>\n              <h1 class=\"price\" [hidden]=\"product.priceSale===''\">\n                <span>${{ product.priceSale }}</span>\n              </h1>\n            </div>\n          </div>\n\n          <!--DESCRIPTION-->\n          <div>\n            <dt class=\"title\">{{ 'Description' | translate }}</dt>\n            <p class=\"info-content\">{{ product.description }}</p>\n          </div>\n\n          <!--CHARACTERISTICS-->\n          <div>\n            <dt class=\"title\">{{ 'Characteristics' | translate }}</dt>\n            <div class=\"info-content\" *ngFor=\"let characteristic of product.infoAditional[0].values\">\n              <a class=\"title\">{{ characteristic.title }}</a>:\n              <a>{{ characteristic.description }}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--MORE INFO-->\n      <div class=\"row more-info\">\n        <!--SPECIFICATIONS TECHNICALS / COMMENTS-->\n        <div class=\"col-md-6\">\n          <!--specifications technicals-->\n          <div class=\"col-md-12\">\n            <dt class=\"title\">{{ 'Technicals Specifications' | translate }}</dt>\n            <!--HEADER-->\n            <div class=\"row header\">\n              <div class=\"col-sm-4 title\">{{ 'Parameter' | translate }}</div>\n              <div class=\"col-sm-4 title\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"right\">{{ 'Eye Right' | translate }}</label>\n                </div>\n                <!--<input type=\"checkbox\" class=\"form-check-label\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"> {{ 'Eye Right' | translate }}-->\n              </div>\n              <div class=\"col-sm-4 title\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"left\">{{ 'Eye Left' | translate }}</label>\n                </div>\n                <!--<input type=\"checkbox\" class=\"form-check-label\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"> {{ 'Eye Left' | translate }}-->\n              </div>\n            </div>\n\n            <!--CONTENT INFO-->\n            <div class=\"row content\">\n\n              <!--PARAM NAME-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row label\">\n                  <label class=\"form-check-label\">{{ 'Quantity' }}:</label>&nbsp;&nbsp;\n                </div>\n                <div *ngFor=\"let parameter of product.parametersRight\">\n                  <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--Right Eye-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row selection\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"!product.eyeRight\">\n                </div>\n                <div *ngFor=\"let parameter of product.parametersRight\">\n                  <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\"\n                          [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'image'\" class=\"select-values col-sm-9\">\n                        <ng-select [items]=\"tones\" [(ngModel)]=\"parameter.selected\" bindLabel=\"value\" bindValue=\"value\"\n                                   placeholder=\"{{ 'Select value' | translate }}\" [disabled]=\"!product.parametersRight[0].selected || !product.eyeRight\">\n                            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                                <div>\n                                  <img height=\"125\" width=\"125\" [src]=\"item.image\"/>\n                                </div>\n                            </ng-template>\n                        </ng-select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--Left Eye-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row selection\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"!product.eyeLeft\">\n                </div>\n                <div *ngFor=\"let parameter of product.parametersLeft\">\n                  <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\" [(ngModel)]=\"parameter.sel\"\n                          bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n\n                      <div *ngIf=\"parameter.type === 'image'\" class=\"select-values col-sm-9\">\n                          <ng-select [items]=\"tones\" [(ngModel)]=\"parameter.selected\" bindLabel=\"value\" bindValue=\"value\"\n                                     placeholder=\"{{ 'Select value' | translate }}\" [disabled]=\"!product.parametersLeft[0].selected || !product.eyeLeft\">\n                              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                                  <div>\n                                    <img height=\"100\" width=\"100\" [src]=\"item.image\"/>\n                                  </div>\n                              </ng-template>\n                          </ng-select>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n          <!--comments-->\n          <div class=\"col-md-12\">\n            <dt class=\"title\">{{ 'Comments' | translate }}</dt>\n\n            <!--HEADER-->\n            <div class=\"row header\">\n              <div class=\"col-sm-6 title\">{{ 'Right Eye' | translate }}</div>\n              <div class=\"col-sm-6 title\">{{ 'Left Eye' | translate }}</div>\n            </div>\n            <!--CONTENT-->\n            <div class=\"row content\">\n              <div class=\"col-md-6\">\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsRight\" [disabled]=\"!product.eyeRight\"\n                  placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n              </div>\n              <div class=\"col-md-6\">\n                <textarea style=\"overflow-x: hidden;\" class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsLeft\" [disabled]=\"!product.eyeLeft\"\n                  placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n              </div>\n            </div>\n          </div>\n          <br>\n          <!--files-->\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <dt class=\"title\">{{ 'Documents' | translate }}</dt>\n                <div class=\"custom-file\">\n                  <input type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n                  <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n                  <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n                </div>\n              </div>\n              <br>\n              <div class=\"col-md-12\" style=\"margin-bottom: 40px\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th width=\"50%\">{{ 'Name' | translate }}</th>\n                      <th>{{ 'Size' | translate }}</th>\n                      <th>{{ 'Actions' | translate }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of uploader.queue\">\n                      <td><strong>{{ item?.file?.name }}</strong></td>\n                      <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                      <td nowrap>\n                        <!--<button type=\"button\" class=\"btn btn-success btn-xs\"\n                          (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                          <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>-->\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                          (click)=\"item.remove()\">\n                          <span class=\"glyphicon glyphicon-trash\"></span> {{ 'Remove' | translate }}\n                        </button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div>\n                  <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> {{ 'Remove all' | translate }}\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!--PROPERTIES / FILTERS / PATIENT / CLIENT-->\n        <div class=\"col-md-6\">\n          <!-- properties -->\n          <div class=\"row\">\n            <div class=\"item-properties col-md-5\">\n              <dt>{{ 'Properties' | translate }}</dt>\n              <p>\n                <img placement=\"top\" ngbTooltip=\"Toric\" class=\"alignleft wp-image-1358\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-02-150x150.png\"\n                  alt=\"Toric\" width=\"30\" height=\"30\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"Multifocal\" class=\"alignleft wp-image-1359\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-03-300x300.png\"\n                  alt=\"Multifocal\" width=\"30\" height=\"30\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"3-monthly\" class=\"wp-image-1389 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/10/íconos-09-273x300.png\"\n                  alt=\"\" width=\"30\" height=\"33\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"Sylicone Hydrogel\" class=\"wp-image-1362 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-06-250x300.png\"\n                  alt=\"\" width=\"28\" height=\"33\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"UV Filter\" class=\"wp-image-1364 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png\"\n                  alt=\"\" width=\"35\" height=\"33\" srcset=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png 300w, http://spctinternational.com/wp-content/uploads/2017/09/íconos-08.png 459w\"\n                  sizes=\"(max-width: 35px) 100vw, 35px\">&nbsp;\n              </p>\n            </div>\n            <!-- MATERIAL -->\n            <div class=\"col-md-4\">\n              <dt>Material</dt>\n              <dd>\n                <a>{{ product.material }}</a>\n              </dd>\n            </div>\n            <!-- PRODUCT SHEET -->\n            <div class=\"col-md-3\">\n              <dt>Product Sheet</dt>\n              <dd>\n                <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' }}</a>\n              </dd>\n            </div>\n            <!-- REPLACEMENT PERIOD -->\n            <div class=\"col-md-5\">\n              <dt>{{ 'Replacemente Period' | translate }}</dt>\n              <p>{{ product.replacementPeriod | translate }}</p>\n            </div>\n            <!-- WARRANTY -->\n            <div class=\"col-md-4\">\n              <dt>{{ 'Warranty' | translate }}</dt>\n              <p>{{ product.warranty }}</p>\n            </div>\n          </div>\n\n          <!--filters products\n          <dt class=\"filters\">{{ 'View more products' | translate }}</dt>\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <dt>{{ 'Category' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.category.name }}</a>\n            </div>\n            <div class=\"col-md-4\">\n              <dt>{{ 'Supplier' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.supplier.companyName }}</a>\n            </div>\n            <div class=\"col-md-3\">\n              <dt>{{ 'Product' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.father }}</a>\n            </div>\n          </div>-->\n\n          <!-- client -->\n          <div>\n            <dt class=\"title\">{{ 'Client' | translate }}</dt>\n            <div class=\"row\">\n              <!--name client-->\n              <div class=\"col-md-6\" [hidden]=\"user.role.idRole!==3\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\" [(ngModel)]=\"product.client\"\n                    disabled>\n                </div>\n              </div>\n              <div class=\"col-md-6\" [hidden]=\"user.role.idRole===3\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\" [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\"\n                     placeholder=\"{{ 'Select value' | translate }}\">\n                  </ng-select>\n                </div>\n              </div>\n              <!--shipping address-->\n              <div class=\"col-md-6\">\n                <span class=\"title\">{{ 'Shipping Address' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <textarea style=\"overflow-x: hidden;\" class=\"form-control\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" disabled></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- patient -->\n          <div>\n            <dt class=\"title\">{{ 'Patient' | translate }}</dt>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\" [(ngModel)]=\"product.patient\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <br>\n\n      <div class=\"buy-btns\">\n        <button class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n          {{ 'Buy now' | translate }}\n        </button>\n        <button class=\"btn btn-lg btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(1)\" [disabled]=\"!formIsValid()\">\n          <i class=\"fa fa-cart-plus\"></i> Add to cart\n        </button>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view-magicLook/product-view-magic.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/products/product-view-magicLook/product-view-magic.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n\n.select-values {\n  padding-left: 0px; }\n\n.card-body {\n  padding: 20px !important; }\n\n.gallery-wrap .img-big-wrap img {\n  height: 343px;\n  width: auto;\n  display: inline-block;\n  cursor: zoom-in; }\n\n.gallery-wrap .img-small-wrap .item-gallery {\n  width: 60px;\n  height: 60px;\n  border: 1px solid #ddd;\n  margin: 7px 2px;\n  display: inline-block;\n  overflow: hidden; }\n\n.gallery-wrap .img-small-wrap {\n  text-align: center; }\n\n.gallery-wrap .img-small-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  cursor: zoom-in; }\n\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\n\nimg {\n  max-width: 100%; }\n\n.preview {\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n\n.preview-pic {\n  flex-grow: 1; }\n\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px; }\n\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%; }\n\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block; }\n\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0; }\n\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0; }\n\n.tab-content {\n  overflow: hidden; }\n\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n\n.card {\n  background: #eee;\n  padding: 2em;\n  line-height: 1.5em; }\n\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n    margin-bottom: 10px; } }\n\n.details {\n  display: flex;\n  flex-direction: column; }\n\n.details > div:nth-child(2) {\n    padding-top: 20px; }\n\n.details > div:nth-child(3) {\n    padding-top: 35px; }\n\n.details > div:nth-child(3) .info-content {\n      margin-top: 10px; }\n\n.colors {\n  flex-grow: 1; }\n\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n\n.checked,\n.price span {\n  color: #ff9f1a; }\n\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n\n.product-title {\n  margin-top: 0; }\n\n.size {\n  margin-right: 10px; }\n\n.size:first-of-type {\n  margin-left: 40px; }\n\n.color {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px; }\n\n.color:first-of-type {\n  margin-left: 20px; }\n\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n\n.buy-btns {\n  text-align: right; }\n\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n\n.tooltip-inner {\n  padding: 1.3em; }\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.fa-arrow-left {\n  margin-top: 10px; }\n\n.title {\n  font-weight: 600; }\n\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n\n.item-properties img {\n  width: 30px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .header {\n  margin-left: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content {\n  margin-left: 25px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content .label {\n    margin-top: 17px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content .selection {\n    margin-top: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) {\n  margin-top: 35px;\n  margin-left: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) {\n    max-width: 48%; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) .header {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) .content {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(2) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) > div:nth-child(2) .row .title {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(3) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) > div:nth-child(3) .row .title {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) .filters {\n  margin-top: 10px; }\n\n.my-drop-zone {\n  border: dotted 3px lightgray; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n/* Default class applied to drop zones on over */\n\n.another-file-over-class {\n  border: dotted 3px green; }\n\n.custom-file-input {\n  cursor: pointer; }\n\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n"

/***/ }),

/***/ "./src/app/products/product-view-magicLook/product-view-magic.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/products/product-view-magicLook/product-view-magic.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductViewMagicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewMagicComponent", function() { return ProductViewMagicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-buy.component */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewMagicComponent = /** @class */ (function () {
    function ProductViewMagicComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.products = new Array;
        this.tones = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        // Upload files
        this.listFileBasket = new Array;
        this.uploadResult = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResult) {
                _this.buildFileProductRequested();
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
        };
    }
    ProductViewMagicComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductViewMagicComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.getProductView();
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductViewMagicComponent.prototype.getProductView = function () {
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](-15, -0.25, 0.25)));
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        this.product.infoAditional = JSON.parse(this.product.infoAditional);
        this.product.priceSale = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewMagicComponent.prototype.changeSelect = function (eye, parameter, value) {
        parameter.selected = value;
        if (parameter.name === "Tone") {
            switch (value) {
                case "1 TONE":
                    this.tones = JSON.parse(this.product.types)[0].parameters[1].values[0];
                    break;
                case "2 TONE":
                    this.tones = JSON.parse(this.product.types)[0].parameters[1].values[1];
                    break;
                case "3 TONE":
                    this.tones = JSON.parse(this.product.types)[0].parameters[1].values[2];
                    break;
            }
            if (eye === 'right') {
                this.product.parametersRight[1].selected = null;
            }
            else {
                this.product.parametersLeft[1].selected = null;
            }
        }
    };
    ProductViewMagicComponent.prototype.setValueEye = function (eye) {
        if (eye === "right") {
            this.product.eyeRight = !this.product.eyeRight;
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
        }
    };
    ProductViewMagicComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.product.eyeRight) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.product.eyeLeft) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewMagicComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
                    if (_this.product.supplier.idSupplier === 1) {
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.cardCode === null || u.cardCode === '');
                        });
                    }
                    else if (_this.product.supplier.idSupplier === 4) {
                        // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.certificationCode === null || u.certificationCode === '');
                        });
                    }
                    else {
                        _this.listCustomers = _this.listCustomersAux;
                    }
                }
            });
        }
    };
    ProductViewMagicComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
        }
    };
    ProductViewMagicComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewMagicComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewMagicComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.product.priceSale = this.product.price1;
                break;
            case 2:
                this.product.priceSale = this.product.price2;
                break;
            case 3:
                this.product.priceSale = this.product.price3;
                break;
        }
    };
    ProductViewMagicComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        var productsSelected = this.productsSelected;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = product.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel']);
                });
                productSelected.parameters = product.parametersRight;
            }
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values', 'sel']);
                });
                productSelected.parameters = product.parametersLeft;
            }
            productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](productSelected, ['parameters', 'eye']);
        });
        return productsSelected;
    };
    ProductViewMagicComponent.prototype.addToCart = function (type) {
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        this.saveFiles();
        var productsRequested = [];
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
            productoSelect.idProduct = product.id;
            productRequest.product = productoSelect;
            productRequest.quantity = product.quantity;
            productRequest.price = product.price;
            productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
            productRequest.patient = product.patient;
            productRequest.observations = product.observations;
            productsRequested.push(productRequest);
        });
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
        this.openModal(type);
    };
    ProductViewMagicComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationBuyComponent"], { size: 'lg', windowClass: 'modal-content-border' });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.uploader = this.uploader;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewMagicComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient) {
            return false;
        }
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null) {
                    isValid = false;
                }
            });
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null) {
                    isValid = false;
                }
            });
        }
        return isValid;
    };
    ProductViewMagicComponent.prototype.saveFiles = function () {
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                item.upload();
            });
        }
    };
    ProductViewMagicComponent.prototype.buildFileProductRequested = function () {
        if (this.uploadResult.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__["FileProductRequested"]();
            debugger;
            fileProductRequest.url = this.uploadResult.response;
            fileProductRequest.name = this.uploadResult.item.file.name;
            fileProductRequest.size = this.uploadResult.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileBasket.push(fileProductRequest);
        }
        else {
            console.log('error file');
        }
    };
    ProductViewMagicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view-magic',
            template: __webpack_require__(/*! ./product-view-magic.component.html */ "./src/app/products/product-view-magicLook/product-view-magic.component.html"),
            styles: [__webpack_require__(/*! ./product-view-magic.component.scss */ "./src/app/products/product-view-magicLook/product-view-magic.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_19__["FileProductRequestedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], ProductViewMagicComponent);
    return ProductViewMagicComponent;
}());



/***/ }),

/***/ "./src/app/products/product-view/product-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-view/product-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-breadcrumbs\" *ngIf=\"product\">\n  <app-page-header class=\"info-top\" [heading]=\"'Product Details'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <a routerLink=\"/products\">\n    <i class=\"fa fa-arrow-left\">&nbsp;&nbsp;{{ 'Back' | translate }}</i>\n  </a>\n</div>\n<div class=\"padding-detail\" *ngIf=\"product\">\n  <div class=\"card\">\n    <div class=\"container-fliud\">\n      <div class=\"wrapper row\">\n        <!-- PRODUCT IMAGE -->\n        <div class=\"preview col-md-6\">\n          <div class=\"preview-pic tab-content\">\n            <div class=\"tab-pane active\" id=\"pic-1\">\n              <img src=\"{{ product.mainImg }}\"/>\n            </div>\n\n          </div>\n\n        </div>\n        <!--INFO-->\n        <div class=\"details col-md-6\">\n\n          <!-- PRODUCT NAME / PRICE-->\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"product-title\">{{ product.name }}</h4>\n              <h1 class=\"price\" [hidden]=\"product.priceSale===''\">\n                <span>${{ product.priceSale }}</span>\n              </h1>\n            </div>\n          </div>\n\n          <!--DESCRIPTION-->\n          <div>\n            <dt class=\"title\">{{ 'Description' | translate }}</dt>\n            <p class=\"info-content\">{{ product.description }}</p>\n          </div>\n\n          <!--CHARACTERISTICS-->\n          <div>\n            <dt class=\"title\">{{ 'Characteristics' | translate }}</dt>\n            <div class=\"info-content\" *ngFor=\"let characteristic of product.infoAditional[0].values\">\n              <a class=\"title\">{{ characteristic.title }}</a>:\n              <a>{{ characteristic.description }}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--MORE INFO-->\n      <div class=\"row more-info\">\n        <!--SPECIFICATIONS TECHNICALS / COMMENTS-->\n        <div class=\"col-md-6\">\n          <!--specifications technicals-->\n          <div class=\"col-md-12\">\n            <dt class=\"title\">{{ 'Technicals Specifications' | translate }}</dt>\n            <!--HEADER-->\n            <div class=\"row header\">\n              <div class=\"col-sm-4 title\">{{ 'Parameter' | translate }}</div>\n              <div class=\"col-sm-4 title\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input id=\"right\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"right\">{{ 'Eye Right' | translate }}</label>\n                </div>\n                <!--<input type=\"checkbox\" class=\"form-check-label\" (click)=\"setValueEye('right')\" [checked]=\"product.eyeRight\"> {{ 'Eye Right' | translate }}-->\n              </div>\n              <div class=\"col-sm-4 title\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input id=\"left\" type=\"checkbox\" name=\"checkboxGroupAll\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"\n                    class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"left\">{{ 'Eye Left' | translate }}</label>\n                </div>\n                <!--<input type=\"checkbox\" class=\"form-check-label\" (click)=\"setValueEye('left')\" [checked]=\"product.eyeLeft\"> {{ 'Eye Left' | translate }}-->\n              </div>\n            </div>\n\n            <!--CONTENT INFO-->\n            <div class=\"row content\">\n\n              <!--PARAM NAME-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row label\">\n                  <label class=\"form-check-label\">{{ 'Quantity' }}:</label>&nbsp;&nbsp;\n                </div>\n                <div *ngFor=\"let parameter of product.parametersRight\">\n                  <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                    <div class=\"row label\">\n                      <label class=\"form-check-label\">{{ parameter.name }}:</label>&nbsp;&nbsp;\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--Right Eye-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row selection\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityRight\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"!product.eyeRight\">\n                </div>\n                <div *ngFor=\"let parameter of product.parametersRight\">\n                  <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <!--<select class=\"form-control\" name=\"value\" (change)=\"changeSelect('right', parameter, $event.target.value)\" [disabled]=\"!product.eyeRight\">\n                          <option value=\"\">{{ 'Select option' }}</option>\n                          <option *ngFor=\"let value of parameter.values\">{{ value }}</option>\n                        </select>-->\n                        <ng-select (change)=\"changeSelect('right', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeRight\"\n                          [(ngModel)]=\"parameter.sel\" bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n                      <!--<div *ngIf=\"parameter.type === 'radio'\">\n                        <div *ngFor=\"let value of parameter.values\" class=\"custom-control custom-radio\">\n                          <input class=\"custom-control-input\" type=\"radio\" id=\"{{ value.name + eye.type }}\" [checked]=\"checkedRadio(eye.type, value)\" (click)=\"setValueRadio(eye.type, value, parameter)\">\n                          <label class=\"custom-control-label\" for=\"{{ value.name + eye.type }}\">{{ value.name }}</label>\n                        </div>\n                      </div>-->\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <!--Left Eye-->\n              <div class=\"col-sm-4 title\">\n                <div class=\"row selection\">\n                  <input class=\"form-control col-sm-8\" type=\"number\" step=1 min=\"1\" [(ngModel)]=\"product.quantityLeft\" oninput=\"validity.valid||(value='');\"\n                    [disabled]=\"!product.eyeLeft\">\n                </div>\n                <div *ngFor=\"let parameter of product.parametersLeft\">\n                  <div *ngIf=\"parameter.values && parameter.values.length > 0\">\n                    <div class=\"row selection\">\n                      <div *ngIf=\"parameter.type === 'selected'\" class=\"select-values col-sm-9\">\n                        <!--<select class=\"form-control\" name=\"value\" (change)=\"changeSelect('left', parameter, $event.target.value)\" [disabled]=\"!product.eyeLeft\">\n                          <option value=\"\">{{ 'Select option' }}</option>\n                          <option *ngFor=\"let value of parameter.values\">{{ value }}</option>\n                        </select>-->\n                        <ng-select (change)=\"changeSelect('left', parameter, $event)\" [items]=\"parameter.values\" [disabled]=\"!product.eyeLeft\" [(ngModel)]=\"parameter.sel\"\n                          bindLabel=\"item\" bindValue=\"item\" placeholder=\"{{ 'Select value' | translate }}\">\n                          {{item}}\n                        </ng-select>\n                      </div>\n                      <!--<div *ngIf=\"parameter.type === 'radio'\">\n                        <div *ngFor=\"let value of parameter.values\" class=\"custom-control custom-radio\">\n                          <input class=\"custom-control-input\" type=\"radio\" id=\"{{ value.name + eye.type }}\" [checked]=\"checkedRadio(eye.type, value)\" (click)=\"setValueRadio(eye.type, value, parameter)\">\n                          <label class=\"custom-control-label\" for=\"{{ value.name + eye.type }}\">{{ value.name }}</label>\n                        </div>\n                      </div>-->\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n          <!--comments-->\n          <div class=\"col-md-12\">\n            <dt class=\"title\">{{ 'Comments' | translate }}</dt>\n\n            <!--HEADER-->\n            <div class=\"row header\">\n              <div class=\"col-sm-6 title\">{{ 'Right Eye' | translate }}</div>\n              <div class=\"col-sm-6 title\">{{ 'Left Eye' | translate }}</div>\n            </div>\n            <!--CONTENT-->\n            <div class=\"row content\">\n              <div class=\"col-md-6\">\n                <textarea class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsRight\" [disabled]=\"!product.eyeRight\"\n                  placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n              </div>\n              <div class=\"col-md-6\">\n                <textarea class=\"form-control col-md-10\" type=\"text\" [(ngModel)]=\"product.observationsLeft\" [disabled]=\"!product.eyeLeft\"\n                  placeholder=\"{{ 'Introduces right eye observations' | translate }}\"></textarea>\n              </div>\n            </div>\n          </div>\n          <br>\n          <!--files-->\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <dt class=\"title\">{{ 'Documents' | translate }}</dt>\n                <div class=\"custom-file\">\n                  <input type=\"file\" class=\"custom-file-input\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n                  <label class=\"custom-file-label\" for=\"FS\">{{ 'Choose file' | translate }}...</label>\n                  <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n                </div>\n              </div>\n              <br>\n              <div class=\"col-md-12\" style=\"margin-bottom: 40px\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th width=\"50%\">{{ 'Name' | translate }}</th>\n                      <th>{{ 'Size' | translate }}</th>\n                      <th>{{ 'Actions' | translate }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of uploader.queue\">\n                      <td><strong>{{ item?.file?.name }}</strong></td>\n                      <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                      <td nowrap>\n                        <!--<button type=\"button\" class=\"btn btn-success btn-xs\"\n                          (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                          <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>-->\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                          (click)=\"item.remove()\">\n                          <span class=\"glyphicon glyphicon-trash\"></span> {{ 'Remove' | translate }}\n                        </button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div>\n                  <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> {{ 'Remove all' | translate }}\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!--PROPERTIES / FILTERS / PATIENT / CLIENT-->\n        <div class=\"col-md-6\">\n          <!-- properties -->\n          <div class=\"row\">\n            <div class=\"item-properties col-md-5\">\n              <dt>{{ 'Properties' | translate }}</dt>\n              <p>\n                <img placement=\"top\" ngbTooltip=\"Toric\" class=\"alignleft wp-image-1358\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-02-150x150.png\"\n                  alt=\"Toric\" width=\"30\" height=\"30\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"Multifocal\" class=\"alignleft wp-image-1359\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-03-300x300.png\"\n                  alt=\"Multifocal\" width=\"30\" height=\"30\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"3-monthly\" class=\"wp-image-1389 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/10/íconos-09-273x300.png\"\n                  alt=\"\" width=\"30\" height=\"33\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"Sylicone Hydrogel\" class=\"wp-image-1362 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-06-250x300.png\"\n                  alt=\"\" width=\"28\" height=\"33\">&nbsp;\n                <img placement=\"top\" ngbTooltip=\"UV Filter\" class=\"wp-image-1364 alignleft\" src=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png\"\n                  alt=\"\" width=\"35\" height=\"33\" srcset=\"http://spctinternational.com/wp-content/uploads/2017/09/íconos-08-300x286.png 300w, http://spctinternational.com/wp-content/uploads/2017/09/íconos-08.png 459w\"\n                  sizes=\"(max-width: 35px) 100vw, 35px\">&nbsp;\n              </p>\n            </div>\n            <!-- MATERIAL -->\n            <div class=\"col-md-4\">\n              <dt>Material</dt>\n              <dd>\n                <a>{{ product.material }}</a>\n              </dd>\n            </div>\n            <!-- PRODUCT SHEET -->\n            <div class=\"col-md-3\">\n              <dt>Product Sheet</dt>\n              <dd>\n                <a href=\"{{ product.url }}\" target=\"_blank\">{{ 'Download' }}</a>\n              </dd>\n            </div>\n            <!-- REPLACEMENT PERIOD -->\n            <div class=\"col-md-5\">\n              <dt>{{ 'Replacemente Period' | translate }}</dt>\n              <p>{{ product.replacementPeriod | translate }}</p>\n            </div>\n            <!-- WARRANTY -->\n            <div class=\"col-md-4\">\n              <dt>{{ 'Warranty' | translate }}</dt>\n              <p>{{ product.warranty }}</p>\n            </div>\n          </div>\n\n          <!--filters products\n          <dt class=\"filters\">{{ 'View more products' | translate }}</dt>\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <dt>{{ 'Category' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.category.name }}</a>\n            </div>\n            <div class=\"col-md-4\">\n              <dt>{{ 'Supplier' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.supplier.companyName }}</a>\n            </div>\n            <div class=\"col-md-3\">\n              <dt>{{ 'Product' | translate }}</dt>\n              <a href=\"#\" target=\"_blank\">{{ product.father }}</a>\n            </div>\n          </div>-->\n\n          <!-- client -->\n          <div>\n            <dt class=\"title\">{{ 'Client' | translate }}</dt>\n            <div class=\"row\">\n              <!--name client-->\n              <div class=\"col-md-6\" [hidden]=\"user.role.idRole!==3\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\" [(ngModel)]=\"product.client\"\n                    disabled>\n                </div>\n              </div>\n              <div class=\"col-md-6\" [hidden]=\"user.role.idRole===3\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <ng-select [items]=\"listCustomers\" (change)=\"onSelectedClient($event)\" [(ngModel)]=\"CustomersSelected\" [virtualScroll]=\"true\" bindLabel=\"name\" bindValue=\"idUser\"\n                     placeholder=\"{{ 'Select value' | translate }}\">\n                  </ng-select>\n                </div>\n              </div>\n              <!--shipping address-->\n              <div class=\"col-md-6\">\n                <span class=\"title\">{{ 'Shipping Address' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <textarea class=\"form-control\" type=\"text\" [(ngModel)]=\"product.shippingAddress\" disabled></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- patient -->\n          <div>\n            <dt class=\"title\">{{ 'Patient' | translate }}</dt>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <span class=\"title\">{{ 'Full Name' | translate }}:</span>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"{{ 'Introduce name patient' | translate }}\" [(ngModel)]=\"product.patient\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <br>\n\n      <div class=\"buy-btns\">\n        <button class=\"btn btn-lg btn-primary btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(2)\" [disabled]=\"!formIsValid()\">\n          {{ 'Buy now' | translate }}\n        </button>\n        <button class=\"btn btn-lg btn-outline-primary text-uppercase\" (click)=\"formIsValid() && addToCart(1)\" [disabled]=\"!formIsValid()\">\n          <i class=\"fa fa-cart-plus\"></i> Add to cart\n        </button>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/products/product-view/product-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-view/product-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-breadcrumbs {\n  margin-top: 80px;\n  margin-left: 3%; }\n\n.padding-detail {\n  padding: 10px 40px 10px 40px; }\n\n.select-values {\n  padding-left: 0px; }\n\n.card-body {\n  padding: 20px !important; }\n\n.gallery-wrap .img-big-wrap img {\n  height: 343px;\n  width: auto;\n  display: inline-block;\n  cursor: zoom-in; }\n\n.gallery-wrap .img-small-wrap .item-gallery {\n  width: 60px;\n  height: 60px;\n  border: 1px solid #ddd;\n  margin: 7px 2px;\n  display: inline-block;\n  overflow: hidden; }\n\n.gallery-wrap .img-small-wrap {\n  text-align: center; }\n\n.gallery-wrap .img-small-wrap img {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  cursor: zoom-in; }\n\nbody {\n  font-family: 'open sans';\n  overflow-x: hidden; }\n\nimg {\n  max-width: 100%; }\n\n.preview {\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px; } }\n\n.preview-pic {\n  flex-grow: 1; }\n\n.preview-pic > div:nth-child(2) {\n    margin-top: 10px; }\n\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px; }\n\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%; }\n\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block; }\n\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0; }\n\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0; }\n\n.tab-content {\n  overflow: hidden; }\n\n.tab-content img {\n  width: 100%;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: .3s;\n  animation-duration: .3s; }\n\n.card {\n  background: #eee;\n  padding: 2em;\n  line-height: 1.5em; }\n\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n    margin-bottom: 10px; } }\n\n.details {\n  display: flex;\n  flex-direction: column; }\n\n.details > div:nth-child(2) {\n    padding-top: 20px; }\n\n.details > div:nth-child(3) {\n    padding-top: 35px; }\n\n.details > div:nth-child(3) .info-content {\n      margin-top: 10px; }\n\n.colors {\n  flex-grow: 1; }\n\n.product-title,\n.price,\n.sizes,\n.colors {\n  text-transform: UPPERCASE;\n  font-weight: bold; }\n\n.checked,\n.price span {\n  color: #ff9f1a; }\n\n.rating,\n.price,\n.vote,\n.sizes {\n  margin-bottom: 15px; }\n\n.product-title {\n  margin-top: 0; }\n\n.size {\n  margin-right: 10px; }\n\n.size:first-of-type {\n  margin-left: 40px; }\n\n.color {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px; }\n\n.color:first-of-type {\n  margin-left: 20px; }\n\n.add-to-cart,\n.like {\n  background: #ff9f1a;\n  padding: 1.2em 1.5em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background .3s ease; }\n\n.add-to-cart:hover,\n.like:hover {\n  background: #b36800;\n  color: #fff; }\n\n.not-available {\n  text-align: center;\n  line-height: 2em; }\n\n.buy-btns {\n  text-align: right; }\n\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\\f00d\";\n  color: #fff; }\n\n.tooltip-inner {\n  padding: 1.3em; }\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(3);\n    transform: scale(3); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.fa-arrow-left {\n  margin-top: 10px; }\n\n.title {\n  font-weight: 600; }\n\n.info-content {\n  margin-left: 15px;\n  margin-bottom: 0px; }\n\n.item-properties img {\n  width: 30px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .header {\n  margin-left: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content {\n  margin-left: 25px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content .label {\n    margin-top: 17px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) .content .selection {\n    margin-top: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) {\n  margin-top: 35px;\n  margin-left: 5px; }\n\n.more-info > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) {\n    max-width: 48%; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) .header {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(1) > div:nth-child(2) .content {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(2) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) > div:nth-child(2) .row .title {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) > div:nth-child(3) {\n  margin-top: 30px; }\n\n.more-info > div:nth-child(2) > div:nth-child(3) .row .title {\n    margin-left: 15px; }\n\n.more-info > div:nth-child(2) .filters {\n  margin-top: 10px; }\n\n.my-drop-zone {\n  border: dotted 3px lightgray; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n/* Default class applied to drop zones on over */\n\n.another-file-over-class {\n  border: dotted 3px green; }\n\n.custom-file-input {\n  cursor: pointer; }\n\n.custom-control-label::before {\n  border: solid 1px #c3c2c2; }\n"

/***/ }),

/***/ "./src/app/products/product-view/product-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-view/product-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function() { return ProductViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/productrequested */ "./src/app/shared/models/productrequested.ts");
/* harmony import */ var _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/basket/basket.service */ "./src/app/shared/services/basket/basket.service.ts");
/* harmony import */ var _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alertify/alertify.service */ "./src/app/shared/services/alertify/alertify.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/confirmation-buy/confirmation-buy.component */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts");
/* harmony import */ var _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/models/basketrequest */ "./src/app/shared/models/basketrequest.ts");
/* harmony import */ var _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services/shippingAddress/shipping-address.service */ "./src/app/shared/services/shippingAddress/shipping-address.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/models/fileproductrequested */ "./src/app/shared/models/fileproductrequested.ts");
/* harmony import */ var _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/services/fileproductrequested/fileproductrequested.service */ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var URL = _src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].apiUrl + 'fileProductRequested/uploader';
var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent(productService, route, userStorageService, basketService, shippingAddressService, userService, fileProductRequestedService, modalService, alertify, notification, translate) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.userStorageService = userStorageService;
        this.basketService = basketService;
        this.shippingAddressService = shippingAddressService;
        this.userService = userService;
        this.fileProductRequestedService = fileProductRequestedService;
        this.modalService = modalService;
        this.alertify = alertify;
        this.notification = notification;
        this.translate = translate;
        this.products = new Array;
        this.quantity = 1;
        this.productsSelected = new Array;
        this.axesXtensa = new Array;
        this.basketRequestModal = new _shared_models_basketrequest__WEBPACK_IMPORTED_MODULE_14__["BasketRequest"]();
        this.listCustomers = new Array;
        this.listCustomersAux = new Array;
        // Upload files
        this.listFileBasket = new Array;
        this.uploadResult = null;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUploader"]({ url: URL,
            itemAlias: 'files',
            authToken: this.userStorageService.getToke(),
            autoUpload: false });
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
            if (_this.uploadResult) {
                _this.buildFileProductRequested();
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.uploadResult = { 'success': true, 'item': item, 'response': response, 'status': status, 'headers': headers };
        };
    }
    ProductViewComponent.prototype.ngOnInit = function () {
        this.getProducts();
        /* var product xtensa */
        this.setAxesXtensa();
    };
    ProductViewComponent.prototype.setAxesXtensa = function () {
        this.axesXtensa = [{ "values": ["5º", "10º", "15º", "20º", "25º", "30º", "35º", "40º", "45º", "50º", "55º", "60º", "65º", "70º", "75º", "80º", "85º", "90º", "95º", "100º", "105º", "110º", "115º", "120º", "125º", "130º", "135º", "140º", "145º", "150º", "155º", "160º", "165º", "170º", "175º", "180º"] },
            { "values": ["10º", "20º", "30º", "40º", "50º", "60º", "70º", "80º", "90º", "100º", "110º", "120º", "130º", "140º", "150º", "160º", "170º", "180º"] }];
    };
    ProductViewComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.products = res.data;
                _this.getProductView();
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductViewComponent.prototype.getProductView = function () {
        console.log(JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](-15, -0.25, 0.25)));
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.products, { idProduct: this.id });
        this.product.eyeRight = false;
        this.product.eyeLeft = false;
        this.product.type = JSON.parse(this.product.types)[0].name;
        this.product.parametersRight = JSON.parse(this.product.types)[0].parameters;
        this.product.parametersLeft = JSON.parse(this.product.types)[0].parameters;
        this.product.infoAditional = JSON.parse(this.product.infoAditional);
        this.product.priceSale = '';
        this.setClient();
        this.setPrice();
    };
    ProductViewComponent.prototype.changeSelect = function (eye, parameter, value) {
        parameter.selected = value;
        /*if (this.product.father === "Xtensa" && parameter.name === 'Cylinder (D)'){
          this.setValuesAxesXtensa(eye, value);
        }*/
    };
    /*setValuesAxesXtensa(eye, value) {
      if (eye === 'right') {
        this.paramAxesRight = _.find(this.product.parametersRight, { 'name': 'Axes (º)' });
        if (parseFloat(value) <= -3.25) {
          this.paramAxesRight.values = this.axesXtensa[0].values;
        } else {
          this.paramAxesRight.values = this.axesXtensa[1].values;
        }
      } else {
        this.paramAxesLeft = _.find(this.product.parametersLeft, { 'name': 'Axes (º)' });
        if (parseFloat(value) <= -3.25) {
          this.paramAxesLeft.values = this.axesXtensa[0].values;
        } else {
          this.paramAxesLeft.values = this.axesXtensa[1].values;
        }
      }
    }*/
    ProductViewComponent.prototype.setValueEye = function (eye) {
        if (eye === "right") {
            this.product.eyeRight = !this.product.eyeRight;
        }
        else {
            this.product.eyeLeft = !this.product.eyeLeft;
        }
    };
    ProductViewComponent.prototype.setEyeSelected = function () {
        this.productsSelected = [];
        if (this.product.eyeRight) {
            this.productsSelected.push({ eye: 'Right' });
        }
        if (this.product.eyeLeft) {
            this.productsSelected.push({ eye: 'Left' });
        }
    };
    ProductViewComponent.prototype.setClient = function () {
        var _this = this;
        if (this.user.role.idRole === 3) {
            this.client = this.currentUser.idUser;
            this.product.client = this.currentUser.name;
            this.findShippingAddress(this.client);
        }
        else if (this.user.role.idRole === 1 || this.user.role.idRole === 2) {
            this.userService.allCustomersAvailableBuy$(this.product.supplier.idSupplier).subscribe(function (res) {
                if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                    _this.listCustomersAux = res.data;
                    // Si el proveedor del producto es Markennovy(id:1) se debe preguntar por el cardCode
                    if (_this.product.supplier.idSupplier === 1) {
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.cardCode === null || u.cardCode === '');
                        });
                    }
                    else if (_this.product.supplier.idSupplier === 4) {
                        // Si el proveedor del producto es Euclid se debe preguntar por el numero de certificacion
                        _this.listCustomers = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](_this.listCustomersAux, function (u) {
                            return !(u.certificationCode === null || u.certificationCode === '');
                        });
                    }
                    else {
                        _this.listCustomers = _this.listCustomersAux;
                    }
                }
            });
        }
    };
    ProductViewComponent.prototype.onSelectedClient = function (clienteSelect) {
        if (clienteSelect !== undefined) {
            this.client = clienteSelect.idUser;
            this.findShippingAddress(this.client);
            this.definePrice(clienteSelect.membership.idMembership);
        }
        else {
            this.client = '';
            this.product.shippingAddress = '';
            this.product.priceSale = '';
        }
    };
    ProductViewComponent.prototype.findShippingAddress = function (idCliente) {
        var _this = this;
        this.shippingAddressService.findIdUser$(idCliente).subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].ok) {
                _this.product.shippingAddress = res.data.name + ',' + res.data.city + '-' + res.data.state + ' ' + res.data.country;
            }
            else if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_4__["CodeHttp"].notContent) {
                _this.product.shippingAddress = '';
                _this.translate.get('You must enter a main address in the shipping address module', { value: 'You must enter a main address in the shipping address module' }).subscribe(function (res) {
                    _this.notification.warning('', res);
                });
            }
            else {
                _this.product.shippingAddress = '';
            }
        });
    };
    ProductViewComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership = this.currentUser.membership.idMembership;
            this.definePrice(membership);
        }
    };
    ProductViewComponent.prototype.definePrice = function (membership) {
        switch (membership) {
            case 1:
                this.product.priceSale = this.product.price1;
                break;
            case 2:
                this.product.priceSale = this.product.price2;
                break;
            case 3:
                this.product.priceSale = this.product.price3;
                break;
        }
    };
    ProductViewComponent.prototype.buildProductsSelected = function () {
        this.setEyeSelected();
        var product = this.productCopy;
        var productsSelected = this.productsSelected;
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (productSelected, index) {
            productSelected.id = product.idProduct;
            productSelected.patient = product.patient;
            productSelected.price = product.priceSale;
            if (productSelected.eye === "Right") {
                productSelected.quantity = product.quantityRight;
                productSelected.observations = product.observationsRight;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersRight, function (parameter, index) {
                    product.parametersRight[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values']);
                });
                productSelected.parameters = product.parametersRight;
            }
            if (productSelected.eye === "Left") {
                productSelected.quantity = product.quantityLeft;
                productSelected.observations = product.observationsLeft;
                lodash__WEBPACK_IMPORTED_MODULE_1__["each"](product.parametersLeft, function (parameter, index) {
                    product.parametersLeft[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](parameter, ['type', 'values']);
                });
                productSelected.parameters = product.parametersLeft;
            }
            productSelected.detail = { name: product.type, eye: productSelected.eye, parameters: productSelected.parameters };
            productsSelected[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["omit"](productSelected, ['parameters', 'eye']);
        });
        return productsSelected;
    };
    ProductViewComponent.prototype.addToCart = function (type) {
        this.productCopy = JSON.parse(JSON.stringify(this.product));
        this.saveFiles();
        var productsRequested = [];
        var productsSelected = this.buildProductsSelected();
        lodash__WEBPACK_IMPORTED_MODULE_1__["each"](productsSelected, function (product) {
            var productRequest = new _shared_models_productrequested__WEBPACK_IMPORTED_MODULE_6__["ProductRequested"]();
            var productoSelect = new _shared_models_product__WEBPACK_IMPORTED_MODULE_11__["Product"]();
            productoSelect.idProduct = product.id;
            productRequest.product = productoSelect;
            productRequest.quantity = product.quantity;
            productRequest.price = product.price;
            productRequest.detail = '[' + JSON.stringify(product.detail) + ']';
            productRequest.patient = product.patient;
            productRequest.observations = product.observations;
            productsRequested.push(productRequest);
        });
        this.basketRequestModal.idUser = this.client;
        this.basketRequestModal.productRequestedList = productsRequested;
        this.basketRequestModal.fileProductRequestedList = this.listFileBasket;
        this.openModal(type);
    };
    ProductViewComponent.prototype.openModal = function (type) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationBuyComponent"], { size: 'lg', windowClass: 'modal-content-border' });
        modalRef.componentInstance.datos = this.basketRequestModal;
        modalRef.componentInstance.product = this.product;
        modalRef.componentInstance.listFileBasket = this.listFileBasket;
        modalRef.componentInstance.role = this.user.role.idRole;
        modalRef.componentInstance.typeBuy = type;
        modalRef.componentInstance.uploader = this.uploader;
        modalRef.result.then(function (result) {
            _this.ngOnInit();
        }, function (reason) {
        });
    };
    ProductViewComponent.prototype.formIsValid = function () {
        var isValid = true;
        if ((!this.product.eyeRight && !this.product.eyeLeft) || !this.product.patient) {
            return false;
        }
        if (this.product.eyeRight) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersRight, function (param) {
                if (param.selected === null) {
                    isValid = false;
                }
            });
        }
        if (this.product.eyeLeft) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.product.parametersLeft, function (param) {
                if (param.selected === null) {
                    isValid = false;
                }
            });
        }
        return isValid;
    };
    ProductViewComponent.prototype.saveFiles = function () {
        if (this.uploader.queue) {
            lodash__WEBPACK_IMPORTED_MODULE_1__["each"](this.uploader.queue, function (item) {
                item.upload();
            });
        }
    };
    ProductViewComponent.prototype.buildFileProductRequested = function () {
        if (this.uploadResult.success) {
            var fileProductRequest = new _shared_models_fileproductrequested__WEBPACK_IMPORTED_MODULE_18__["FileProductRequested"]();
            fileProductRequest.url = this.uploadResult.response;
            fileProductRequest.name = this.uploadResult.item.file.name;
            fileProductRequest.size = this.uploadResult.item.file.size;
            fileProductRequest.createdAt = new Date();
            this.listFileBasket.push(fileProductRequest);
        }
        else {
            console.log('error file');
        }
    };
    ProductViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-view',
            template: __webpack_require__(/*! ./product-view.component.html */ "./src/app/products/product-view/product-view.component.html"),
            styles: [__webpack_require__(/*! ./product-view.component.scss */ "./src/app/products/product-view/product-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_5__["UserStorageService"],
            _shared_services_basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"],
            _shared_services_shippingAddress_shipping_address_service__WEBPACK_IMPORTED_MODULE_15__["ShippingAddressService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _shared_services_fileproductrequested_fileproductrequested_service__WEBPACK_IMPORTED_MODULE_19__["FileProductRequestedService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            _shared_services_alertify_alertify_service__WEBPACK_IMPORTED_MODULE_8__["AlertifyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], ProductViewComponent);
    return ProductViewComponent;
}());



/***/ }),

/***/ "./src/app/products/products-lists/products-lists.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/products-lists/products-lists.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n<div class=\"margin-breadcrumb\">\n  <app-page-header [heading]=\"'Products List'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <br>\n  <a routerLink=\"/dashboard\">\n    <i class=\"fa fa-arrow-left\">&nbsp;&nbsp;{{ 'Back' | translate }}</i>\n  </a>\n</div>\n<div class=\"middleBar\">\n  <div class=\"row display-table\">\n    <div class=\"col-sm-3 vertical-align text-left hidden-xs\">\n    </div>\n    <!-- end col -->\n    <div class=\"col-sm-9 vertical-align text-center\">\n      <form>\n        <div class=\"row grid-space-1\">\n          <div class=\"col col-xl-12 col-lg-12 search\">\n            <input class=\"form-control\" (keyup)=\"getItems($event)\" placeholder=\" {{ 'Enter product name...' | translate }} \">\n            <i class=\"fa fa-search\"></i>\n          </div>\n        </div>\n        <!-- end row -->\n      </form>\n    </div>\n    <!-- end col -->\n  </div>\n  <!-- end  row -->\n</div>\n\n<div class=\"padding-list\">\n  <div class=\"row\">\n    <!--FILTERS-->\n    <div class=\"col-sm-3 col-md-3 hidden-xs\">\n      <ngb-accordion activeIds=\"filter2\" type=\"dark\" (panelChange)=\"beforeChange($event)\">\n        <ngb-panel id=\"filter2\">\n          <ng-template ngbPanelTitle>\n            <span class=\"title-collapse\">{{ 'Contact Lenses' | translate }}</span>\n          </ng-template>\n          <ng-template ngbPanelContent>\n            <div *ngFor=\"let supplier of listSupplierFilter; let i = index\">\n              <div class=\"custom-control custom-radio\">\n                <input type=\"radio\" id=\"radioGroupSupplier{{i}}\" name=\"radioGroupSupplier\" [value]=\"supplier.idSupplier\" (change)=\"onSelectionSupplier(supplier.idSupplier)\" [checked]=\"supplier.idSupplier===1000\"\n                  class=\"custom-control-input\">\n                <label class=\"custom-control-label\" for=\"radioGroupSupplier{{i}}\">{{ supplier.companyName | translate }}</label>\n              </div>\n            </div>\n            <div class=\"col-sm-12\" *ngFor=\"let category of auxCategories; let i = index\" [hidden]=\"!visible || category.name === 'Other'\">\n              <div class=\"custom-control custom-radio\">\n                <input type=\"radio\" id=\"radioGroupCategory{{i}}\" name=\"radioGroupCategory\" [value]=\"category.idCategory\" (change)=\"onSelectionCategory(category.idCategory)\"\n                  class=\"custom-control-input\">\n                <label class=\"custom-control-label\" for=\"radioGroupCategory{{i}}\">{{ category.name | translate }}</label>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-panel>\n      </ngb-accordion>\n    </div>\n    <!--THUMBNAILS PRODUCTS-->\n    <div class=\"col-sm-9 col-md-9 col-lg-9\">\n      <div class=\"row\">\n        <div class=\"col-md-4 box-shadow\" *ngFor=\"let product of products\">\n          <div class=\"mb-4 box-shadow\">\n            <img class=\"card-img-top\" src=\"{{ product.mainImg }}\" (click)=\"redirectView(product)\">\n            <h3 class=\"product-name\" (click)=\"redirectView(product)\">\n              <i class=\"fa fa-exclamation-triangle\" placement=\"top\" ngbTooltip=\"{{'Inactive' | translate}}\" [hidden]=\"product.status === 1\"></i>\n              {{ product.name }}\n            </h3>\n            <div class=\"card-body\">\n              <p class=\"card-text\"> {{ product.descriptionShort }}</p>\n              <div class=\"price-wrap h4\" [hidden]=\"user.role.idRole!==3\">\n                <!--<del class=\"price-base\">${{ product.priceBase }}</del>&nbsp;-->\n                <span class=\"price-new text-warning\">${{ product.priceSale }}</span>\n              </div>\n              <div class=\"product-btns\">\n                <div class=\"btn-group\">\n                  <button (click)=\"redirectView(product)\" [hidden]=\"user.role.idRole === 3 || user.role.idRole === 2\" type=\"button\" class=\"btn btn-primary\">View</button>\n                  <button (click)=\"open(product,'edit')\" [hidden]=\"user.role.idRole === 3 || user.role.idRole === 2\" type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products-lists/products-lists.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/products/products-lists/products-lists.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Define tr width */\n.card {\n  border: 0.5px solid rgba(0, 0, 0, 0.125) !important;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12) !important; }\n.card .card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #ffffff;\n    color: #1756a6;\n    font-weight: 600;\n    border-bottom: none;\n    font-size: 1.3rem; }\n.card .card-header .card-body {\n      overflow-y: -webkit-paged-y; }\n.table > thead > tr > th {\n  border-top: none; }\n.table > tbody > tr:nth-last-child(1) {\n  height: 100px; }\n.header-column :hover {\n  cursor: pointer; }\n.dropdown-item {\n  cursor: pointer; }\n.table-empty {\n  text-align: center;\n  padding: 25px;\n  font-weight: 600;\n  color: #8a8a8a; }\n.pagination-list {\n  text-align: right;\n  line-height: 0 !important;\n  font-weight: 300; }\n.count-elements {\n  margin-right: 0px; }\n.fa-sort-up {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort-down {\n  margin-left: 5px;\n  cursor: pointer; }\n.fa-sort {\n  margin-left: 5px;\n  cursor: pointer; }\n.no-records {\n  text-align: center; }\n.td-table {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.btn-main {\n  background: #1756a6;\n  color: #ffffff; }\n.btn-main:focus {\n    box-shadow: none; }\n.btn-main:hover {\n    background: #185eb9; }\n.btn-dropdown-main {\n  color: #1756a6;\n  background-color: transparent;\n  background-image: none;\n  border-color: none;\n  border-radius: 2px; }\n.btn-dropdown-main:focus {\n    box-shadow: none; }\n.dropdown-menu {\n  min-width: 7rem;\n  top: 28px !important;\n  left: 10px !important; }\n.dropdown-menu::before {\n  position: absolute;\n  top: -7px;\n  left: 59px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #CCC;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: ''; }\n.dropdown-menu::after {\n  position: absolute;\n  top: -6px;\n  left: 60px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  border-left: 6px solid transparent;\n  content: ''; }\n.btn.disabled, .btn:disabled {\n  cursor: not-allowed; }\n.modal-header {\n  background-color: #1756a6;\n  color: #ffff;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  align-items: center;\n  height: 50px; }\n.modal-header > button {\n    color: #ffffff;\n    opacity: 1; }\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n.ng-invalid:not(form) {\n  border-left: 5px solid #cc0000;\n  /* red */ }\n.content {\n  padding: 1.7rem; }\n.form-control:focus {\n  box-shadow: 0 0 0 0.08rem rgba(0, 123, 255, 0.2); }\n.message-error {\n  margin-top: -1rem;\n  color: #cc0000;\n  font-size: 0.85rem; }\n.page-header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  background: white;\n  margin-top: -10px;\n  padding-top: 10px;\n  margin-left: 30px; }\n.sp-container {\n  padding-top: 100px;\n  padding-left: 30px; }\n.sp-title {\n  color: #1756a6;\n  font-weight: bold;\n  font-size: 1.4rem; }\n.margin-breadcrumb {\n  margin-left: 3%; }\n.margin-list {\n  margin-left: 20% !important; }\n.title-collapse {\n  color: #ffffff; }\n.container {\n  padding: 0px; }\n.search {\n  padding-bottom: 1.5rem; }\n.search i {\n    position: absolute;\n    top: 10px;\n    right: 30px;\n    color: #ced4da; }\n.middleBar {\n  padding: 0px 25px 15px 35px; }\n.middleBar .display-table {\n    padding-right: 20px !important; }\n.padding-list {\n  padding: 0px 40px 0px 40px; }\n.btn-align {\n  text-align: center;\n  padding-bottom: 20px; }\n.card {\n  margin-top: 30px; }\n.card-img-top {\n  border-radius: 12px;\n  cursor: pointer;\n  height: 220px;\n  width: 80%;\n  margin-left: 10%;\n  padding: 5%; }\n.card-body {\n  padding-top: 2px; }\n.product-name {\n  text-align: center;\n  color: #1756a6;\n  padding-top: 10px;\n  cursor: pointer;\n  height: 75px; }\n.card-product:after {\n  content: \"\";\n  display: table;\n  clear: both;\n  visibility: hidden; }\n.card-product .price-new, .card-product .price {\n  margin-right: 5px; }\n.price-base {\n  color: #999; }\n.card-product .img-wrap {\n  border-radius: 3px 3px 0 0;\n  overflow: hidden;\n  position: relative;\n  height: 220px;\n  text-align: center; }\n.card-product .img-wrap img {\n  max-height: 100%;\n  max-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.card-product .info-wrap {\n  overflow: hidden;\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .action-wrap {\n  padding-top: 4px;\n  margin-top: 4px; }\n.card-product .bottom-wrap {\n  padding: 15px;\n  border-top: 1px solid #eee; }\n.card-product .title {\n  margin-top: 0; }\nbody {\n  margin-top: 50px; }\n.glyphicon {\n  margin-right: 10px; }\n.panel-body {\n  padding: 0px; }\n.panel-body table tr td {\n  padding-left: 15px; }\n.panel-body .table {\n  margin-bottom: 0px; }\n.product-btns {\n  text-align: right; }\n.fa-exclamation-triangle {\n  color: #cc0000; }\n"

/***/ }),

/***/ "./src/app/products/products-lists/products-lists.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/products-lists/products-lists.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListsComponent", function() { return ProductsListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/products/product.service */ "./src/app/shared/services/products/product.service.ts");
/* harmony import */ var _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/enum/code-http.enum */ "./src/app/shared/enum/code-http.enum.ts");
/* harmony import */ var _http_user_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/user-storage.service */ "./src/app/http/user-storage.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_services_supplieruser_supplieruser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/supplieruser/supplieruser.service */ "./src/app/shared/services/supplieruser/supplieruser.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/edit-product/edit-product.component */ "./src/app/products/modals/edit-product/edit-product.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/suppliers/supplier.service */ "./src/app/shared/services/suppliers/supplier.service.ts");
/* harmony import */ var _shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/category/category.service */ "./src/app/shared/services/category/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductsListsComponent = /** @class */ (function () {
    function ProductsListsComponent(productService, userStorageService, modalService, supplierUserService, router, supplierService, categoryService) {
        this.productService = productService;
        this.userStorageService = userStorageService;
        this.modalService = modalService;
        this.supplierUserService = supplierUserService;
        this.router = router;
        this.supplierService = supplierService;
        this.categoryService = categoryService;
        this.products = new Array();
        this.productsAux = new Array();
        this.listSupplier = new Array();
        this.listSupplierAux = new Array();
        this.listSupplierFilter = new Array();
        this.listSupplierFilterAux = new Array();
        this.auxCategories = new Array;
        this.currentUser = JSON.parse(userStorageService.getCurrentUser()).userResponse;
        this.user = JSON.parse(userStorageService.getCurrentUser());
    }
    ProductsListsComponent.prototype.ngOnInit = function () {
        this.getSuppliers();
        this.getProducts();
        this.visible = false;
    };
    ProductsListsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                if (_this.user.role.idRole === 3) {
                    _this.productsAux = res.data;
                    _this.products = res.data;
                    _this.associatedSuppliers();
                }
                else if (_this.user.role.idRole === 1 ||
                    _this.user.role.idRole === 2) {
                    _this.products = res.data;
                    _this.productsAux = res.data;
                }
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductsListsComponent.prototype.associatedSuppliers = function () {
        var _this = this;
        this.supplierUserService
            .findIdUser$(this.currentUser.idUser)
            .subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                _this.listSupplierAux = res.data;
                var userConc_1 = _this.currentUser;
                _this.listSupplier = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](_this.listSupplierAux, function (u) {
                    var idSupp = u.supplier.idSupplier;
                    switch (idSupp) {
                        case 1:// Markennoy
                            return !(userConc_1.cardCode === null || userConc_1.cardCode === '');
                        case 2:// Europa
                            return u;
                        case 3:// Lenticon
                            return u;
                        case 4:// Euclid
                            return !(userConc_1.certificationCode === null || userConc_1.certificationCode === '');
                        case 5:// Magic Look
                            return u;
                        case 6:// Blue Light
                            return u;
                    }
                });
                _this.productAvailable();
            }
        });
    };
    ProductsListsComponent.prototype.productAvailable = function () {
        var lista = this.listSupplier;
        var productsFiltered = [];
        lodash__WEBPACK_IMPORTED_MODULE_4__["each"](this.products, function (product) {
            lodash__WEBPACK_IMPORTED_MODULE_4__["each"](lista, function (item) {
                if (product.supplier.idSupplier === item.supplier.idSupplier) {
                    productsFiltered.push(product);
                }
            });
        });
        this.products = productsFiltered;
        this.productsAux = productsFiltered;
        this.setPrice();
    };
    ProductsListsComponent.prototype.setPrice = function () {
        if (this.user.role.idRole === 3) {
            var membership_1 = this.currentUser.membership.idMembership;
            lodash__WEBPACK_IMPORTED_MODULE_4__["each"](this.products, function (product) {
                switch (membership_1) {
                    case 1:
                        product.priceSale = product.price1;
                        break;
                    case 2:
                        product.priceSale = product.price2;
                        break;
                    case 3:
                        product.priceSale = product.price3;
                        break;
                }
            });
        }
    };
    ProductsListsComponent.prototype.redirectView = function (product) {
        switch (product.supplier.idSupplier) {
            case 1://markennovy
                this.router.navigate(['/products/' + product.idProduct + '/product-view']);
                break;
            case 2://europa
                this.router.navigate(['/products/' + product.idProduct + '/product-view-europa']);
                break;
            case 4://euclid
                this.router.navigate(['/products/' + product.idProduct + '/product-view-euclid']);
                break;
            case 5://magic look
                this.router.navigate(['/products/' + product.idProduct + '/product-view-magic']);
                break;
            case 6://magic blue
                this.router.navigate(['/products/' + product.idProduct + '/product-view-blue']);
                break;
        }
    };
    ProductsListsComponent.prototype.open = function (product, action) {
        var _this = this;
        var modalRef = this.modalService.open(_modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"], {
            size: 'lg',
            windowClass: 'modal-content-border'
        });
        modalRef.componentInstance.product = product;
        modalRef.componentInstance.action = action;
        modalRef.result.then(function (result) {
            _this.getProducts();
        }, function (reason) { });
    };
    ProductsListsComponent.prototype.getSuppliers = function () {
        var _this = this;
        this.supplierService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                _this.listSupplierFilterAux = res.data;
                _this.listSupplierFilter = _this.listSupplierFilterAux;
                var array = [{ idSupplier: 1000, companyName: 'All' }];
                _this.listSupplierFilter = lodash__WEBPACK_IMPORTED_MODULE_4__["concat"](_this.listSupplierFilter, array);
                _this.listSupplierFilterAux = lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"](_this.listSupplierFilter, ['idSupplier'], ['desc']);
                _this.listSupplierFilter = _this.listSupplierFilterAux;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductsListsComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.findAll$().subscribe(function (res) {
            if (res.code === _shared_enum_code_http_enum__WEBPACK_IMPORTED_MODULE_2__["CodeHttp"].ok) {
                _this.auxCategories = res.data;
                _this.visible = true;
            }
            else {
                console.log(res.errors[0].detail);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    ProductsListsComponent.prototype.onSelectionSupplier = function (idSupplier) {
        var productsFiltered = [];
        lodash__WEBPACK_IMPORTED_MODULE_4__["each"](this.productsAux, function (product) {
            if (product.supplier.idSupplier === idSupplier) {
                productsFiltered.push(product);
            }
        });
        this.products = productsFiltered;
        switch (idSupplier) {
            case 1:
                this.getCategories();
                break;
            case 1000:
                this.all();
                break;
        }
        if (idSupplier > 1) {
            this.visible = false;
        }
    };
    ProductsListsComponent.prototype.onSelectionCategory = function (idCategory) {
        var productsFiltered = [];
        lodash__WEBPACK_IMPORTED_MODULE_4__["each"](this.productsAux, function (product) {
            if (product.supplier.idSupplier === 1 && product.category.idCategory === idCategory) {
                productsFiltered.push(product);
            }
        });
        this.products = productsFiltered;
    };
    ProductsListsComponent.prototype.all = function () {
        this.products = this.productsAux;
        this.visible = false;
    };
    ProductsListsComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'filter2' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ProductsListsComponent.prototype.getItems = function (ev) {
        this.products = this.productsAux;
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.products = this.products.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    ProductsListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-lists',
            template: __webpack_require__(/*! ./products-lists.component.html */ "./src/app/products/products-lists/products-lists.component.html"),
            styles: [__webpack_require__(/*! ./products-lists.component.scss */ "./src/app/products/products-lists/products-lists.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_products_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _http_user_storage_service__WEBPACK_IMPORTED_MODULE_3__["UserStorageService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _shared_services_supplieruser_supplieruser_service__WEBPACK_IMPORTED_MODULE_5__["SupplieruserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _shared_services_suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_9__["SupplierService"],
            _shared_services_category_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"]])
    ], ProductsListsComponent);
    return ProductsListsComponent;
}());



/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_lists_products_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-lists/products-lists.component */ "./src/app/products/products-lists/products-lists.component.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/products/product-view/product-view.component.ts");
/* harmony import */ var _product_view_europa_product_view_europa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-view-europa/product-view-europa.component */ "./src/app/products/product-view-europa/product-view-europa.component.ts");
/* harmony import */ var _product_view_euclid_product_view_euclid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-view-euclid/product-view-euclid.component */ "./src/app/products/product-view-euclid/product-view-euclid.component.ts");
/* harmony import */ var _product_view_magicLook_product_view_magic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-view-magicLook/product-view-magic.component */ "./src/app/products/product-view-magicLook/product-view-magic.component.ts");
/* harmony import */ var _product_view_blue_product_view_blue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-view-blue/product-view-blue.component */ "./src/app/products/product-view-blue/product-view-blue.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
        canActivateChild: [_shared__WEBPACK_IMPORTED_MODULE_9__["RoleGuard"]],
        children: [
            { path: '', component: _products_lists_products_lists_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListsComponent"], data: { option: 'ProductsList' } },
            { path: ':id/product-view', component: _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_4__["ProductViewComponent"], data: { option: 'ProductsView' } },
            { path: ':id/product-view-europa', component: _product_view_europa_product_view_europa_component__WEBPACK_IMPORTED_MODULE_5__["ProductViewEuropaComponent"], data: { option: 'ProductsViewEuropa' } },
            { path: ':id/product-view-euclid', component: _product_view_euclid_product_view_euclid_component__WEBPACK_IMPORTED_MODULE_6__["ProductViewEuclidComponent"], data: { option: 'ProductsViewEuclid' } },
            { path: ':id/product-view-magic', component: _product_view_magicLook_product_view_magic_component__WEBPACK_IMPORTED_MODULE_7__["ProductViewMagicComponent"], data: { option: 'ProductsViewMagic' } },
            { path: ':id/product-view-blue', component: _product_view_blue_product_view_blue_component__WEBPACK_IMPORTED_MODULE_8__["ProductViewBlueComponent"], data: { option: 'ProductsViewBlue' } },
        ], data: { option: 'ProductsList' }
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<section class=\"main-container\">\n  <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () { };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_lists_products_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-lists/products-lists.component */ "./src/app/products/products-lists/products-lists.component.ts");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/products/product-view/product-view.component.ts");
/* harmony import */ var _product_view_europa_product_view_europa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-view-europa/product-view-europa.component */ "./src/app/products/product-view-europa/product-view-europa.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/modules/header/header.module */ "./src/app/shared/modules/header/header.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/confirmation-buy/confirmation-buy.component */ "./src/app/products/modals/confirmation-buy/confirmation-buy.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modals/edit-product/edit-product.component */ "./src/app/products/modals/edit-product/edit-product.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _product_view_euclid_product_view_euclid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-view-euclid/product-view-euclid.component */ "./src/app/products/product-view-euclid/product-view-euclid.component.ts");
/* harmony import */ var _product_view_magicLook_product_view_magic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-view-magicLook/product-view-magic.component */ "./src/app/products/product-view-magicLook/product-view-magic.component.ts");
/* harmony import */ var _product_view_blue_product_view_blue_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-view-blue/product-view-blue.component */ "./src/app/products/product-view-blue/product-view-blue.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _shared_modules_header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _shared__WEBPACK_IMPORTED_MODULE_10__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"]
            ],
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
                _products_lists_products_lists_component__WEBPACK_IMPORTED_MODULE_4__["ProductsListsComponent"],
                _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_5__["ProductViewComponent"],
                _product_view_europa_product_view_europa_component__WEBPACK_IMPORTED_MODULE_6__["ProductViewEuropaComponent"],
                _product_view_euclid_product_view_euclid_component__WEBPACK_IMPORTED_MODULE_17__["ProductViewEuclidComponent"],
                _product_view_magicLook_product_view_magic_component__WEBPACK_IMPORTED_MODULE_18__["ProductViewMagicComponent"],
                _product_view_blue_product_view_blue_component__WEBPACK_IMPORTED_MODULE_19__["ProductViewBlueComponent"],
                _modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationBuyComponent"],
                _modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_15__["EditProductComponent"]
            ],
            entryComponents: [_modals_confirmation_buy_confirmation_buy_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationBuyComponent"], _modals_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_15__["EditProductComponent"]],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_10__["RoleGuard"], _shared_services__WEBPACK_IMPORTED_MODULE_12__["AuthorizationService"]]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/shared/models/basketrequest.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/basketrequest.ts ***!
  \************************************************/
/*! exports provided: BasketRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketRequest", function() { return BasketRequest; });
var BasketRequest = /** @class */ (function () {
    function BasketRequest() {
    }
    return BasketRequest;
}());



/***/ }),

/***/ "./src/app/shared/models/buynow.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/buynow.ts ***!
  \*****************************************/
/*! exports provided: BuyNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyNow", function() { return BuyNow; });
var BuyNow = /** @class */ (function () {
    function BuyNow() {
    }
    return BuyNow;
}());



/***/ }),

/***/ "./src/app/shared/models/fileproductrequested.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/fileproductrequested.ts ***!
  \*******************************************************/
/*! exports provided: FileProductRequested */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileProductRequested", function() { return FileProductRequested; });
var FileProductRequested = /** @class */ (function () {
    function FileProductRequested() {
    }
    return FileProductRequested;
}());



/***/ }),

/***/ "./src/app/shared/models/product.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/product.ts ***!
  \******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/models/productrequested.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/productrequested.ts ***!
  \***************************************************/
/*! exports provided: ProductRequested */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRequested", function() { return ProductRequested; });
var ProductRequested = /** @class */ (function () {
    function ProductRequested() {
    }
    return ProductRequested;
}());



/***/ }),

/***/ "./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/services/fileproductrequested/fileproductrequested.service.ts ***!
  \**************************************************************************************/
/*! exports provided: FileProductRequestedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileProductRequestedService", function() { return FileProductRequestedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileProductRequestedService = /** @class */ (function () {
    function FileProductRequestedService(http) {
        this.http = http;
    }
    FileProductRequestedService.prototype.uploader$ = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': undefined });
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'fileProductRequested/uploader', formData, {
            headers: header,
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    FileProductRequestedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileProductRequestedService);
    return FileProductRequestedService;
}());



/***/ }),

/***/ "./src/app/shared/services/products/product.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/products/product.service.ts ***!
  \*************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.findAll$ = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'products/findAll');
    };
    ProductService.prototype.update$ = function (product) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'products/update', product);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/services/supplieruser/supplieruser.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/supplieruser/supplieruser.service.ts ***!
  \**********************************************************************/
/*! exports provided: SupplieruserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplieruserService", function() { return SupplieruserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupplieruserService = /** @class */ (function () {
    function SupplieruserService(http) {
        this.http = http;
    }
    SupplieruserService.prototype.findIdUser$ = function (idUser) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'supplierUser/findIdUser/' + idUser);
    };
    SupplieruserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SupplieruserService);
    return SupplieruserService;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map