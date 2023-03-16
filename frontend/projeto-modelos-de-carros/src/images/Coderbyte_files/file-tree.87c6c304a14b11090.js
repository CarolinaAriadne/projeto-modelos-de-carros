$(document).ready(function(){Vue.component('file',{props:['node','parentDir','sessionStatus','selectedFilePathString','closedDirsMapping'],data:function(){return{node:this.node,parentDir:this.parentDir,renamingFileInputField:!1,renameFileModel:this.node.name,}},created:function(){this.onNodeUpdate(this.node)},updated:function(){this.onNodeUpdate(this.node)},watch:{renamingFileInputField:function(newVal){var that=this;setTimeout(function(){var inputField=document.getElementsByClassName('renamingFile')[0];if(newVal){inputField.addEventListener('keyup',function(event){if(event.keyCode===13){that.saveNewFilename(that.node)}})}},500)}},methods:{onNodeUpdate:function(node){if(node.selected==='true'||(node.path&&node.path===this.selectedFilePathString)){this.setNewSelectedFile(node)}
if(this.closedDirsMapping&&this.closedDirsMapping[node.path]){this.$set(node,'closed',this.closedDirsMapping[node.path])}},setNewSelectedFile:function(node,manualAction=!1){this.$emit('file-tree-modify',{'op':'setSelected','node':node,'parentNode':this.parentDir,'sendServerUpdate':manualAction,})},fileIconExistsForLanguage:function(node){var isDir=node.type==='dir'||node.type===0;if(!isDir){var splitFile=node.name.split('.');var ext=splitFile[splitFile.length-1];if(node.name==='yarn.lock'||node.name==='Dockerfile'){ext=node.name}
var extMapping=window.__MAIN_LANGUAGE_LIST_EXTENSION_MAP[ext];if(['rust','mysql'].indexOf(extMapping)!==-1)return!1;if(ext==='tf')return window.__MAIN_LANGUAGE_LIST.Terraform.icon;if(extMapping){for(var key in window.__MAIN_LANGUAGE_LIST){if(window.__MAIN_LANGUAGE_LIST[key].monaco_mode===extMapping){return window.__MAIN_LANGUAGE_LIST[key].icon}}}}
return!1},getFileIcon:function(node){var isDir=node.type==='dir'||node.type===0;var fileIcon=isDir?window.__editor_shared.svgIcons.filetreeDirectoryOpened:window.__editor_shared.svgIcons.filetreeFile;if(isDir&&node.closed==='true'){fileIcon=window.__editor_shared.svgIcons.filetreeDirectory}
return fileIcon},fileClicked:function(node){if(node.type==='dir'||node.type===0){var closed=node.closed==='true'?'false':'true';if(node.path){this.$set(this.closedDirsMapping,node.path,closed)}
this.$set(node,'closed',closed)}
this.setNewSelectedFile(node,!0)},showRenameFileInput:function(node){var that=this;this.renamingFileInputField=!0},cancelRenamingFile:function(node){this.renamingFileInputField=!1;this.renameFileModel=node.name},saveNewFilename:function(node){var newName=this.renameFileModel.substr(0,50).trim();if(newName===''){this.renameFileModel='blank';newName='blank'}
this.$set(node,'name',newName);this.renamingFileInputField=!1;this.$emit('file-tree-modify',{'op':'renamedFile','node':node,})},deleteFile:function(node){var that=this;setTimeout(function(){that.$emit('file-tree-modify',{'op':'deleteFile','node':node,})},100)},setReadOnly:function(node,readOnlyValue){var that=this;if(node.hidden==='true')return;setTimeout(function(){that.$set(node,'readOnly',readOnlyValue.toString())},10)},setHiddenMode:function(node,hiddenValue){var that=this;if(node.readOnly==='true')return;setTimeout(function(){that.$set(node,'hidden',hiddenValue.toString())},50)},},template:`<li
        :key="node.id"
        v-on:click="fileClicked(node)"
        v-if="node.hidden !== 'true' || (window.__sessionInfo && window.__sessionInfo.editingUngradedCustomChallenge)"
        v-bind:class="{
          '__file': true,
          '__selected': node.selected === 'true',
          '__dirHandle': node.type === 'dir' || node.type === 0,
          '__mainFile': node.main === 'true',
          '__hiddenFile': window.__sessionInfo && window.__sessionInfo.editingUngradedCustomChallenge && node.hidden === 'true'
        }">
          <template v-if="renamingFileInputField">
            <span v-html="getFileIcon(node)"></span>
            <input type="text" class="renamingFile" v-model="renameFileModel" />
          </template>
          <template v-else>
            <img v-if="fileIconExistsForLanguage(node)" v-bind:src="fileIconExistsForLanguage(node)" />
            <span v-else v-html="getFileIcon(node)"></span>
            {{ node.name.substr(0, 23) + (node.name.length > 23 ? '...' : '') }}
            <span 
              v-if="node.main && node.name !== 'main.sql'" 
              v-html="window.__editor_shared.svgIcons.helpIcon" 
              class="helpIconMain">
            </span>
          </template>
          <template v-if="node.main !== 'true'">
            <template v-if="renamingFileInputField">
              <span class="fileOpts" v-on:click="cancelRenamingFile(node)">Cancel</span>
              <span class="fileOpts" v-on:click="saveNewFilename(node)">Save</span>
            </template>
            <template v-else-if="sessionStatus !== 'complete'">
              <template v-if="(node.type === 'file' || node.type === 1) && window.__sessionInfo && window.__sessionInfo.editingUngradedCustomChallenge">
                <span 
                  v-if="node.readOnly === 'true'" 
                  class="fileOpts makeReadOnlyFile" 
                  v-on:click="setReadOnly(node, false)"
                  v-html="window.__editor_shared.svgIcons.locked">
                </span>
                <span 
                  v-if="node.readOnly !== 'true'" 
                  v-bind:class="'fileOpts makeNotReadOnlyFile' + (node.hidden === 'true' ? ' disabled' : '')" 
                  v-on:click="setReadOnly(node, true)"
                  v-html="window.__editor_shared.svgIcons.unlocked">
                </span>
                <span 
                  v-if="node.hidden === 'true'" 
                  class="fileOpts closedEye" 
                  v-on:click="setHiddenMode(node, false)"
                  v-html="window.__editor_shared.svgIcons.closedEye">
                </span>
                <span 
                  v-if="node.hidden !== 'true'" 
                  v-bind:class="'fileOpts openEye' + (node.readOnly === 'true' ? ' disabled' : '')" 
                  v-on:click="setHiddenMode(node, true)"
                  v-html="window.__editor_shared.svgIcons.openEye">
                </span>
              </template>
              <span 
                v-if="!window.__sessionInfo && node.readOnly === 'true'" 
                class="fileOpts makeReadOnlyFile readOnlyMessageForCandidates" 
                v-html="window.__editor_shared.svgIcons.locked">
              </span>
              <template v-if="(window.__sessionInfo && window.__sessionInfo.editingUngradedCustomChallenge) || node.readOnly !== 'true'">
                <span class="fileOpts deleteFile" v-on:click="deleteFile(node)" v-html="window.__editor_shared.svgIcons.trash"></span>
                <span class="fileOpts editFile" v-on:click="showRenameFileInput(node)" v-html="window.__editor_shared.svgIcons.editPencil"></span>
              </template>
            </template>
          </template>
      </li>`});Vue.component('directory',{props:['node','parentDir','sessionStatus','selectedFilePathString','closedDirsMapping'],template:`<ul class="__innerDirectory" :key="node.id">
        <file 
          v-bind:node="node" 
          v-bind:parent-dir="parentDir" 
          v-bind:session-status="sessionStatus"
          v-bind:selected-file-path-string="selectedFilePathString"
          v-bind:closed-dirs-mapping="closedDirsMapping"
          v-on="$listeners"></file>
        <template v-if="node.closed !== 'true'" v-for="innerNode in node.contents">
          <directory 
            v-if="innerNode.type === 'dir' || innerNode.type === 0" 
            v-bind:node="innerNode"
            v-bind:parent-dir="node"
            v-bind:session-status="sessionStatus"
            v-bind:selected-file-path-string="selectedFilePathString"
            v-bind:closed-dirs-mapping="closedDirsMapping"
            v-on="$listeners"></directory>
          <file 
            v-if="innerNode.type === 'file' || innerNode.type === 1" 
            v-bind:node="innerNode"
            v-bind:parent-dir="node"
            v-bind:session-status="sessionStatus"
            v-bind:selected-file-path-string="selectedFilePathString"
            v-bind:closed-dirs-mapping="closedDirsMapping"
            v-on="$listeners"></file>
        </template>
      </ul>`});Vue.component('filetree',{props:['filetreeObject','sessionStatus','selectedFilePathString','closedDirsMapping'],data:function(){return{}},methods:{newFile:function(){this.$emit('file-tree-modify',{'op':'newFile','typeCreate':'file',})},newDir:function(){this.$emit('file-tree-modify',{'op':'newFile','typeCreate':'dir',})},},template:`<div class="__outerFileTree">
        <div class="__fileTreeActions" v-if="filetreeObject && filetreeObject.length > 0 && sessionStatus !== 'complete'">
          <span v-html="window.__editor_shared.svgIcons.filetreeNewFile" v-on:click="newFile"></span>
          <span v-html="window.__editor_shared.svgIcons.filetreeNewDirectory" v-on:click="newDir"></span>
        </div>
        <ul class="__rootFileTree">
          <template v-for="node in filetreeObject">
            <directory 
              :key="node.id"
              v-if="node.type === 'dir' || node.type === 0" 
              v-bind:node="node"
              v-bind:parent-dir="undefined"
              v-bind:session-status="sessionStatus"
              v-bind:selected-file-path-string="selectedFilePathString"
              v-bind:closed-dirs-mapping="closedDirsMapping"
              v-on="$listeners"></directory>
            <file 
              :key="node.id"
              v-if="node.type === 'file' || node.type === 1" 
              v-bind:node="node"
              v-bind:session-status="sessionStatus"
              v-bind:selected-file-path-string="selectedFilePathString"
              v-bind:closed-dirs-mapping="closedDirsMapping"
              v-on="$listeners"></file>
          </template>
          <template v-if="filetreeObject && filetreeObject.length === 0 && sessionStatus === 'complete'">
            <p class="noFiletreeMessage">Filetree not available.</p>
          </template>
        </ul>
      </div>`})
$('.helpIconMain').live('click',function(){$.cursorMessage('This file is required to run your code.<br>It cannot be renamed or deleted.',{hideTimeout:0})});$('.helpIconMain').live('mouseout',function(){$.hideCursorMessage()});$('.makeNotReadOnlyFile:not(.disabled)').live('click',function(){$.cursorMessage(window.__sessionInfo&&window.__sessionInfo.editingUngradedCustomChallenge?'This file will be in read-only mode.':'This file is read-only.',{hideTimeout:0})});$('li').live('mouseout',function(){$.hideCursorMessage()});$('.readOnlyMessageForCandidates').live('click',function(){$.cursorMessage('This file is read-only.',{hideTimeout:0})});$('.readOnlyMessageForCandidates').live('mouseout',function(){$.hideCursorMessage()});$('.openEye:not(.disabled)').live('click',function(){$.cursorMessage(window.__sessionInfo&&window.__sessionInfo.editingUngradedCustomChallenge?'This file will be hidden.':'This file is hidden.',{hideTimeout:0})});$('li').live('mouseout',function(){$.hideCursorMessage()})})