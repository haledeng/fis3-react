require.resourceMap({
    "res": {
        "lib/mod.js": {
            "uri": "./lib/mod.js",
            "type": "js"
        },
        "lib/resourcemap.js": {
            "uri": "./lib/resourcemap.js",
            "type": "js"
        },
        "lib/react-dom.js": {
            "uri": "./lib/react-dom.js",
            "type": "js",
            "deps": [
                "node_modules/react/react.js"
            ]
        },
        "node_modules/react/react.js": {
            "uri": "./node_modules/react/react.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/react"
            },
            "deps": [
                "node_modules/react/lib/React.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/React.js": {
            "uri": "./node_modules/react/lib/React.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/React"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/ReactChildren.js",
                "node_modules/react/lib/ReactComponent.js",
                "node_modules/react/lib/ReactClass.js",
                "node_modules/react/lib/ReactDOMFactories.js",
                "node_modules/react/lib/ReactElement.js",
                "node_modules/react/lib/ReactPropTypes.js",
                "node_modules/react/lib/ReactVersion.js",
                "node_modules/react/lib/onlyChild.js",
                "node_modules/fbjs/lib/warning.js",
                "node_modules/react/lib/ReactElementValidator.js"
            ],
            "pkg": "p0"
        },
        "node_modules/object-assign/index.js": {
            "uri": "./node_modules/object-assign/index.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/object-assign/index"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactChildren.js": {
            "uri": "./node_modules/react/lib/ReactChildren.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactChildren"
            },
            "deps": [
                "node_modules/react/lib/PooledClass.js",
                "node_modules/react/lib/ReactElement.js",
                "node_modules/fbjs/lib/emptyFunction.js",
                "node_modules/react/lib/traverseAllChildren.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/PooledClass.js": {
            "uri": "./node_modules/react/lib/PooledClass.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/PooledClass"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/reactProdInvariant.js": {
            "uri": "./node_modules/react/lib/reactProdInvariant.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/reactProdInvariant"
            },
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/invariant.js": {
            "uri": "./node_modules/fbjs/lib/invariant.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/invariant"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactElement.js": {
            "uri": "./node_modules/react/lib/ReactElement.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactElement"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/ReactCurrentOwner.js",
                "node_modules/fbjs/lib/warning.js",
                "node_modules/react/lib/canDefineProperty.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactCurrentOwner.js": {
            "uri": "./node_modules/react/lib/ReactCurrentOwner.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactCurrentOwner"
            },
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/warning.js": {
            "uri": "./node_modules/fbjs/lib/warning.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/warning"
            },
            "deps": [
                "node_modules/fbjs/lib/emptyFunction.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/emptyFunction.js": {
            "uri": "./node_modules/fbjs/lib/emptyFunction.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/emptyFunction"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/canDefineProperty.js": {
            "uri": "./node_modules/react/lib/canDefineProperty.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/canDefineProperty"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/traverseAllChildren.js": {
            "uri": "./node_modules/react/lib/traverseAllChildren.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/traverseAllChildren"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactCurrentOwner.js",
                "node_modules/react/lib/ReactElement.js",
                "node_modules/react/lib/getIteratorFn.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/react/lib/KeyEscapeUtils.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/getIteratorFn.js": {
            "uri": "./node_modules/react/lib/getIteratorFn.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/getIteratorFn"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/KeyEscapeUtils.js": {
            "uri": "./node_modules/react/lib/KeyEscapeUtils.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/KeyEscapeUtils"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactComponent.js": {
            "uri": "./node_modules/react/lib/ReactComponent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactComponent"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactNoopUpdateQueue.js",
                "node_modules/react/lib/canDefineProperty.js",
                "node_modules/fbjs/lib/emptyObject.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactNoopUpdateQueue.js": {
            "uri": "./node_modules/react/lib/ReactNoopUpdateQueue.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactNoopUpdateQueue"
            },
            "deps": [
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/emptyObject.js": {
            "uri": "./node_modules/fbjs/lib/emptyObject.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/emptyObject"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactClass.js": {
            "uri": "./node_modules/react/lib/ReactClass.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactClass"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/ReactComponent.js",
                "node_modules/react/lib/ReactElement.js",
                "node_modules/react/lib/ReactPropTypeLocations.js",
                "node_modules/react/lib/ReactPropTypeLocationNames.js",
                "node_modules/react/lib/ReactNoopUpdateQueue.js",
                "node_modules/fbjs/lib/emptyObject.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/keyMirror.js",
                "node_modules/fbjs/lib/keyOf.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactPropTypeLocations.js": {
            "uri": "./node_modules/react/lib/ReactPropTypeLocations.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactPropTypeLocations"
            },
            "deps": [
                "node_modules/fbjs/lib/keyMirror.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/keyMirror.js": {
            "uri": "./node_modules/fbjs/lib/keyMirror.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/keyMirror"
            },
            "deps": [
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactPropTypeLocationNames.js": {
            "uri": "./node_modules/react/lib/ReactPropTypeLocationNames.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactPropTypeLocationNames"
            },
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/keyOf.js": {
            "uri": "./node_modules/fbjs/lib/keyOf.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/keyOf"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMFactories.js": {
            "uri": "./node_modules/react/lib/ReactDOMFactories.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMFactories"
            },
            "deps": [
                "node_modules/react/lib/ReactElement.js",
                "node_modules/fbjs/lib/mapObject.js",
                "node_modules/react/lib/ReactElementValidator.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/mapObject.js": {
            "uri": "./node_modules/fbjs/lib/mapObject.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/mapObject"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactElementValidator.js": {
            "uri": "./node_modules/react/lib/ReactElementValidator.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactElementValidator"
            },
            "deps": [
                "node_modules/react/lib/ReactCurrentOwner.js",
                "node_modules/react/lib/ReactComponentTreeDevtool.js",
                "node_modules/react/lib/ReactElement.js",
                "node_modules/react/lib/ReactPropTypeLocations.js",
                "node_modules/react/lib/checkReactTypeSpec.js",
                "node_modules/react/lib/canDefineProperty.js",
                "node_modules/react/lib/getIteratorFn.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactComponentTreeDevtool.js": {
            "uri": "./node_modules/react/lib/ReactComponentTreeDevtool.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactComponentTreeDevtool"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactCurrentOwner.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/checkReactTypeSpec.js": {
            "uri": "./node_modules/react/lib/checkReactTypeSpec.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/checkReactTypeSpec"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactPropTypeLocationNames.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/warning.js",
                "node_modules/react/lib/ReactComponentTreeDevtool.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactPropTypes.js": {
            "uri": "./node_modules/react/lib/ReactPropTypes.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactPropTypes"
            },
            "deps": [
                "node_modules/react/lib/ReactElement.js",
                "node_modules/react/lib/ReactPropTypeLocationNames.js",
                "node_modules/fbjs/lib/emptyFunction.js",
                "node_modules/react/lib/getIteratorFn.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactVersion.js": {
            "uri": "./node_modules/react/lib/ReactVersion.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactVersion"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/onlyChild.js": {
            "uri": "./node_modules/react/lib/onlyChild.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/onlyChild"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactElement.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "lib/react.js": {
            "uri": "./lib/react.js",
            "type": "js"
        },
        "modules/dialog/dialog.less": {
            "uri": "./modules/dialog/dialog.css",
            "type": "css"
        },
        "modules/dialog/dialog.css.js": {
            "uri": "./modules/dialog/dialog.css.js",
            "type": "js",
            "extras": {
                "moduleId": "modules/dialog/dialog.css"
            }
        },
        "modules/dialog/dialog": {
            "uri": "./modules/dialog/dialog.js",
            "type": "js",
            "extras": {},
            "deps": [
                "modules/dialog/dialog.css",
                "node_modules/classnames/index.js",
                "node_modules/react/react.js"
            ],
            "pkg": "p1"
        },
        "node_modules/classnames/index.js": {
            "uri": "./node_modules/classnames/index.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/classnames/index"
            },
            "pkg": "p1"
        },
        "modules/popup/popup": {
            "uri": "./modules/popup/popup.js",
            "type": "js"
        },
        "pages/index/container": {
            "uri": "./pages/index/container.js",
            "type": "js",
            "deps": [
                "node_modules/react/react.js",
                "modules/dialog/dialog"
            ],
            "pkg": "p1"
        },
        "pages/index/index": {
            "uri": "./pages/index/index.js",
            "type": "js",
            "deps": [
                "node_modules/react/react.js",
                "pages/index/container",
                "node_modules/react-dom/index.js"
            ],
            "pkg": "p1"
        },
        "node_modules/react-dom/index.js": {
            "uri": "./node_modules/react-dom/index.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react-dom/index"
            },
            "deps": [
                "node_modules/react/lib/ReactDOM.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOM.js": {
            "uri": "./node_modules/react/lib/ReactDOM.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOM"
            },
            "deps": [
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactDefaultInjection.js",
                "node_modules/react/lib/ReactMount.js",
                "node_modules/react/lib/ReactReconciler.js",
                "node_modules/react/lib/ReactUpdates.js",
                "node_modules/react/lib/ReactVersion.js",
                "node_modules/react/lib/findDOMNode.js",
                "node_modules/react/lib/getHostComponentFromComposite.js",
                "node_modules/react/lib/renderSubtreeIntoContainer.js",
                "node_modules/fbjs/lib/warning.js",
                "node_modules/fbjs/lib/ExecutionEnvironment.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMComponentTree.js": {
            "uri": "./node_modules/react/lib/ReactDOMComponentTree.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMComponentTree"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/DOMProperty.js",
                "node_modules/react/lib/ReactDOMComponentFlags.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/DOMProperty.js": {
            "uri": "./node_modules/react/lib/DOMProperty.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/DOMProperty"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMComponentFlags.js": {
            "uri": "./node_modules/react/lib/ReactDOMComponentFlags.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMComponentFlags"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDefaultInjection.js": {
            "uri": "./node_modules/react/lib/ReactDefaultInjection.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDefaultInjection"
            },
            "deps": [
                "node_modules/react/lib/BeforeInputEventPlugin.js",
                "node_modules/react/lib/ChangeEventPlugin.js",
                "node_modules/react/lib/DefaultEventPluginOrder.js",
                "node_modules/react/lib/EnterLeaveEventPlugin.js",
                "node_modules/react/lib/HTMLDOMPropertyConfig.js",
                "node_modules/react/lib/ReactComponentBrowserEnvironment.js",
                "node_modules/react/lib/ReactDOMComponent.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactDOMEmptyComponent.js",
                "node_modules/react/lib/ReactDOMTreeTraversal.js",
                "node_modules/react/lib/ReactDOMTextComponent.js",
                "node_modules/react/lib/ReactDefaultBatchingStrategy.js",
                "node_modules/react/lib/ReactEventListener.js",
                "node_modules/react/lib/ReactInjection.js",
                "node_modules/react/lib/ReactReconcileTransaction.js",
                "node_modules/react/lib/SVGDOMPropertyConfig.js",
                "node_modules/react/lib/SelectEventPlugin.js",
                "node_modules/react/lib/SimpleEventPlugin.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/BeforeInputEventPlugin.js": {
            "uri": "./node_modules/react/lib/BeforeInputEventPlugin.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/BeforeInputEventPlugin"
            },
            "deps": [
                "node_modules/react/lib/EventConstants.js",
                "node_modules/react/lib/EventPropagators.js",
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/react/lib/FallbackCompositionState.js",
                "node_modules/react/lib/SyntheticCompositionEvent.js",
                "node_modules/react/lib/SyntheticInputEvent.js",
                "node_modules/fbjs/lib/keyOf.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/EventConstants.js": {
            "uri": "./node_modules/react/lib/EventConstants.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/EventConstants"
            },
            "deps": [
                "node_modules/fbjs/lib/keyMirror.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/EventPropagators.js": {
            "uri": "./node_modules/react/lib/EventPropagators.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/EventPropagators"
            },
            "deps": [
                "node_modules/react/lib/EventConstants.js",
                "node_modules/react/lib/EventPluginHub.js",
                "node_modules/react/lib/EventPluginUtils.js",
                "node_modules/react/lib/accumulateInto.js",
                "node_modules/react/lib/forEachAccumulated.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/EventPluginHub.js": {
            "uri": "./node_modules/react/lib/EventPluginHub.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/EventPluginHub"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/EventPluginRegistry.js",
                "node_modules/react/lib/EventPluginUtils.js",
                "node_modules/react/lib/ReactErrorUtils.js",
                "node_modules/react/lib/accumulateInto.js",
                "node_modules/react/lib/forEachAccumulated.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/EventPluginRegistry.js": {
            "uri": "./node_modules/react/lib/EventPluginRegistry.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/EventPluginRegistry"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/EventPluginUtils.js": {
            "uri": "./node_modules/react/lib/EventPluginUtils.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/EventPluginUtils"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/EventConstants.js",
                "node_modules/react/lib/ReactErrorUtils.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactErrorUtils.js": {
            "uri": "./node_modules/react/lib/ReactErrorUtils.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactErrorUtils"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/accumulateInto.js": {
            "uri": "./node_modules/react/lib/accumulateInto.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/accumulateInto"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/forEachAccumulated.js": {
            "uri": "./node_modules/react/lib/forEachAccumulated.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/forEachAccumulated"
            },
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/ExecutionEnvironment.js": {
            "uri": "./node_modules/fbjs/lib/ExecutionEnvironment.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/ExecutionEnvironment"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/FallbackCompositionState.js": {
            "uri": "./node_modules/react/lib/FallbackCompositionState.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/FallbackCompositionState"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/PooledClass.js",
                "node_modules/react/lib/getTextContentAccessor.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/getTextContentAccessor.js": {
            "uri": "./node_modules/react/lib/getTextContentAccessor.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/getTextContentAccessor"
            },
            "deps": [
                "node_modules/fbjs/lib/ExecutionEnvironment.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticCompositionEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticCompositionEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticCompositionEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticEvent.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticEvent"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/PooledClass.js",
                "node_modules/fbjs/lib/emptyFunction.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticInputEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticInputEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticInputEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticEvent.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ChangeEventPlugin.js": {
            "uri": "./node_modules/react/lib/ChangeEventPlugin.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ChangeEventPlugin"
            },
            "deps": [
                "node_modules/react/lib/EventConstants.js",
                "node_modules/react/lib/EventPluginHub.js",
                "node_modules/react/lib/EventPropagators.js",
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactUpdates.js",
                "node_modules/react/lib/SyntheticEvent.js",
                "node_modules/react/lib/getEventTarget.js",
                "node_modules/react/lib/isEventSupported.js",
                "node_modules/react/lib/isTextInputElement.js",
                "node_modules/fbjs/lib/keyOf.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactUpdates.js": {
            "uri": "./node_modules/react/lib/ReactUpdates.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactUpdates"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/CallbackQueue.js",
                "node_modules/react/lib/PooledClass.js",
                "node_modules/react/lib/ReactFeatureFlags.js",
                "node_modules/react/lib/ReactReconciler.js",
                "node_modules/react/lib/Transaction.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/CallbackQueue.js": {
            "uri": "./node_modules/react/lib/CallbackQueue.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/CallbackQueue"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/PooledClass.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactFeatureFlags.js": {
            "uri": "./node_modules/react/lib/ReactFeatureFlags.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactFeatureFlags"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactReconciler.js": {
            "uri": "./node_modules/react/lib/ReactReconciler.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactReconciler"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactRef.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactRef.js": {
            "uri": "./node_modules/react/lib/ReactRef.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactRef"
            },
            "deps": [
                "node_modules/react/lib/ReactOwner.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactOwner.js": {
            "uri": "./node_modules/react/lib/ReactOwner.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactOwner"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactInstrumentation.js": {
            "uri": "./node_modules/react/lib/ReactInstrumentation.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactInstrumentation"
            },
            "deps": [
                "node_modules/react/lib/ReactDebugTool.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDebugTool.js": {
            "uri": "./node_modules/react/lib/ReactDebugTool.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDebugTool"
            },
            "deps": [
                "node_modules/react/lib/ReactInvalidSetStateWarningDevTool.js",
                "node_modules/react/lib/ReactHostOperationHistoryDevtool.js",
                "node_modules/react/lib/ReactComponentTreeDevtool.js",
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/fbjs/lib/performanceNow.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactInvalidSetStateWarningDevTool.js": {
            "uri": "./node_modules/react/lib/ReactInvalidSetStateWarningDevTool.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactInvalidSetStateWarningDevTool"
            },
            "deps": [
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactHostOperationHistoryDevtool.js": {
            "uri": "./node_modules/react/lib/ReactHostOperationHistoryDevtool.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactHostOperationHistoryDevtool"
            },
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/performanceNow.js": {
            "uri": "./node_modules/fbjs/lib/performanceNow.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/performanceNow"
            },
            "deps": [
                "node_modules/fbjs/lib/performance.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/performance.js": {
            "uri": "./node_modules/fbjs/lib/performance.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/performance"
            },
            "deps": [
                "node_modules/fbjs/lib/ExecutionEnvironment.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/Transaction.js": {
            "uri": "./node_modules/react/lib/Transaction.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/Transaction"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/getEventTarget.js": {
            "uri": "./node_modules/react/lib/getEventTarget.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/getEventTarget"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/isEventSupported.js": {
            "uri": "./node_modules/react/lib/isEventSupported.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/isEventSupported"
            },
            "deps": [
                "node_modules/fbjs/lib/ExecutionEnvironment.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/isTextInputElement.js": {
            "uri": "./node_modules/react/lib/isTextInputElement.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/isTextInputElement"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/DefaultEventPluginOrder.js": {
            "uri": "./node_modules/react/lib/DefaultEventPluginOrder.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/DefaultEventPluginOrder"
            },
            "deps": [
                "node_modules/fbjs/lib/keyOf.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/EnterLeaveEventPlugin.js": {
            "uri": "./node_modules/react/lib/EnterLeaveEventPlugin.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/EnterLeaveEventPlugin"
            },
            "deps": [
                "node_modules/react/lib/EventConstants.js",
                "node_modules/react/lib/EventPropagators.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/SyntheticMouseEvent.js",
                "node_modules/fbjs/lib/keyOf.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticMouseEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticMouseEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticMouseEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticUIEvent.js",
                "node_modules/react/lib/ViewportMetrics.js",
                "node_modules/react/lib/getEventModifierState.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticUIEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticUIEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticUIEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticEvent.js",
                "node_modules/react/lib/getEventTarget.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ViewportMetrics.js": {
            "uri": "./node_modules/react/lib/ViewportMetrics.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ViewportMetrics"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/getEventModifierState.js": {
            "uri": "./node_modules/react/lib/getEventModifierState.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/getEventModifierState"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/HTMLDOMPropertyConfig.js": {
            "uri": "./node_modules/react/lib/HTMLDOMPropertyConfig.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/HTMLDOMPropertyConfig"
            },
            "deps": [
                "node_modules/react/lib/DOMProperty.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactComponentBrowserEnvironment.js": {
            "uri": "./node_modules/react/lib/ReactComponentBrowserEnvironment.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactComponentBrowserEnvironment"
            },
            "deps": [
                "node_modules/react/lib/DOMChildrenOperations.js",
                "node_modules/react/lib/ReactDOMIDOperations.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/DOMChildrenOperations.js": {
            "uri": "./node_modules/react/lib/DOMChildrenOperations.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/DOMChildrenOperations"
            },
            "deps": [
                "node_modules/react/lib/DOMLazyTree.js",
                "node_modules/react/lib/Danger.js",
                "node_modules/react/lib/ReactMultiChildUpdateTypes.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/createMicrosoftUnsafeLocalFunction.js",
                "node_modules/react/lib/setInnerHTML.js",
                "node_modules/react/lib/setTextContent.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/DOMLazyTree.js": {
            "uri": "./node_modules/react/lib/DOMLazyTree.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/DOMLazyTree"
            },
            "deps": [
                "node_modules/react/lib/DOMNamespaces.js",
                "node_modules/react/lib/setInnerHTML.js",
                "node_modules/react/lib/createMicrosoftUnsafeLocalFunction.js",
                "node_modules/react/lib/setTextContent.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/DOMNamespaces.js": {
            "uri": "./node_modules/react/lib/DOMNamespaces.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/DOMNamespaces"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/setInnerHTML.js": {
            "uri": "./node_modules/react/lib/setInnerHTML.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/setInnerHTML"
            },
            "deps": [
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/react/lib/DOMNamespaces.js",
                "node_modules/react/lib/createMicrosoftUnsafeLocalFunction.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/createMicrosoftUnsafeLocalFunction.js": {
            "uri": "./node_modules/react/lib/createMicrosoftUnsafeLocalFunction.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/createMicrosoftUnsafeLocalFunction"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/setTextContent.js": {
            "uri": "./node_modules/react/lib/setTextContent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/setTextContent"
            },
            "deps": [
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/react/lib/escapeTextContentForBrowser.js",
                "node_modules/react/lib/setInnerHTML.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/escapeTextContentForBrowser.js": {
            "uri": "./node_modules/react/lib/escapeTextContentForBrowser.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/escapeTextContentForBrowser"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/Danger.js": {
            "uri": "./node_modules/react/lib/Danger.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/Danger"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/DOMLazyTree.js",
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/fbjs/lib/createNodesFromMarkup.js",
                "node_modules/fbjs/lib/emptyFunction.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/createNodesFromMarkup.js": {
            "uri": "./node_modules/fbjs/lib/createNodesFromMarkup.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/createNodesFromMarkup"
            },
            "deps": [
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/fbjs/lib/createArrayFromMixed.js",
                "node_modules/fbjs/lib/getMarkupWrap.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/createArrayFromMixed.js": {
            "uri": "./node_modules/fbjs/lib/createArrayFromMixed.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/createArrayFromMixed"
            },
            "deps": [
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/getMarkupWrap.js": {
            "uri": "./node_modules/fbjs/lib/getMarkupWrap.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/getMarkupWrap"
            },
            "deps": [
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactMultiChildUpdateTypes.js": {
            "uri": "./node_modules/react/lib/ReactMultiChildUpdateTypes.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactMultiChildUpdateTypes"
            },
            "deps": [
                "node_modules/fbjs/lib/keyMirror.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMIDOperations.js": {
            "uri": "./node_modules/react/lib/ReactDOMIDOperations.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMIDOperations"
            },
            "deps": [
                "node_modules/react/lib/DOMChildrenOperations.js",
                "node_modules/react/lib/ReactDOMComponentTree.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMComponent.js": {
            "uri": "./node_modules/react/lib/ReactDOMComponent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMComponent"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/AutoFocusUtils.js",
                "node_modules/react/lib/CSSPropertyOperations.js",
                "node_modules/react/lib/DOMLazyTree.js",
                "node_modules/react/lib/DOMNamespaces.js",
                "node_modules/react/lib/DOMProperty.js",
                "node_modules/react/lib/DOMPropertyOperations.js",
                "node_modules/react/lib/EventConstants.js",
                "node_modules/react/lib/EventPluginHub.js",
                "node_modules/react/lib/EventPluginRegistry.js",
                "node_modules/react/lib/ReactBrowserEventEmitter.js",
                "node_modules/react/lib/ReactComponentBrowserEnvironment.js",
                "node_modules/react/lib/ReactDOMButton.js",
                "node_modules/react/lib/ReactDOMComponentFlags.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactDOMInput.js",
                "node_modules/react/lib/ReactDOMOption.js",
                "node_modules/react/lib/ReactDOMSelect.js",
                "node_modules/react/lib/ReactDOMTextarea.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/ReactMultiChild.js",
                "node_modules/react/lib/ReactServerRenderingTransaction.js",
                "node_modules/fbjs/lib/emptyFunction.js",
                "node_modules/react/lib/escapeTextContentForBrowser.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/react/lib/isEventSupported.js",
                "node_modules/fbjs/lib/keyOf.js",
                "node_modules/fbjs/lib/shallowEqual.js",
                "node_modules/react/lib/validateDOMNesting.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/AutoFocusUtils.js": {
            "uri": "./node_modules/react/lib/AutoFocusUtils.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/AutoFocusUtils"
            },
            "deps": [
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/fbjs/lib/focusNode.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/focusNode.js": {
            "uri": "./node_modules/fbjs/lib/focusNode.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/focusNode"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/CSSPropertyOperations.js": {
            "uri": "./node_modules/react/lib/CSSPropertyOperations.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/CSSPropertyOperations"
            },
            "deps": [
                "node_modules/react/lib/CSSProperty.js",
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/fbjs/lib/camelizeStyleName.js",
                "node_modules/react/lib/dangerousStyleValue.js",
                "node_modules/fbjs/lib/hyphenateStyleName.js",
                "node_modules/fbjs/lib/memoizeStringOnly.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/CSSProperty.js": {
            "uri": "./node_modules/react/lib/CSSProperty.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/CSSProperty"
            },
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/camelizeStyleName.js": {
            "uri": "./node_modules/fbjs/lib/camelizeStyleName.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/camelizeStyleName"
            },
            "deps": [
                "node_modules/fbjs/lib/camelize.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/camelize.js": {
            "uri": "./node_modules/fbjs/lib/camelize.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/camelize"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/dangerousStyleValue.js": {
            "uri": "./node_modules/react/lib/dangerousStyleValue.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/dangerousStyleValue"
            },
            "deps": [
                "node_modules/react/lib/CSSProperty.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/hyphenateStyleName.js": {
            "uri": "./node_modules/fbjs/lib/hyphenateStyleName.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/hyphenateStyleName"
            },
            "deps": [
                "node_modules/fbjs/lib/hyphenate.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/hyphenate.js": {
            "uri": "./node_modules/fbjs/lib/hyphenate.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/hyphenate"
            },
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/memoizeStringOnly.js": {
            "uri": "./node_modules/fbjs/lib/memoizeStringOnly.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/memoizeStringOnly"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/DOMPropertyOperations.js": {
            "uri": "./node_modules/react/lib/DOMPropertyOperations.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/DOMPropertyOperations"
            },
            "deps": [
                "node_modules/react/lib/DOMProperty.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactDOMInstrumentation.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/quoteAttributeValueForBrowser.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMInstrumentation.js": {
            "uri": "./node_modules/react/lib/ReactDOMInstrumentation.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMInstrumentation"
            },
            "deps": [
                "node_modules/react/lib/ReactDOMDebugTool.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMDebugTool.js": {
            "uri": "./node_modules/react/lib/ReactDOMDebugTool.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMDebugTool"
            },
            "deps": [
                "node_modules/react/lib/ReactDOMNullInputValuePropDevtool.js",
                "node_modules/react/lib/ReactDOMUnknownPropertyDevtool.js",
                "node_modules/react/lib/ReactDebugTool.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMNullInputValuePropDevtool.js": {
            "uri": "./node_modules/react/lib/ReactDOMNullInputValuePropDevtool.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMNullInputValuePropDevtool"
            },
            "deps": [
                "node_modules/react/lib/ReactComponentTreeDevtool.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMUnknownPropertyDevtool.js": {
            "uri": "./node_modules/react/lib/ReactDOMUnknownPropertyDevtool.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMUnknownPropertyDevtool"
            },
            "deps": [
                "node_modules/react/lib/DOMProperty.js",
                "node_modules/react/lib/EventPluginRegistry.js",
                "node_modules/react/lib/ReactComponentTreeDevtool.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/quoteAttributeValueForBrowser.js": {
            "uri": "./node_modules/react/lib/quoteAttributeValueForBrowser.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/quoteAttributeValueForBrowser"
            },
            "deps": [
                "node_modules/react/lib/escapeTextContentForBrowser.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactBrowserEventEmitter.js": {
            "uri": "./node_modules/react/lib/ReactBrowserEventEmitter.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactBrowserEventEmitter"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/EventConstants.js",
                "node_modules/react/lib/EventPluginRegistry.js",
                "node_modules/react/lib/ReactEventEmitterMixin.js",
                "node_modules/react/lib/ViewportMetrics.js",
                "node_modules/react/lib/getVendorPrefixedEventName.js",
                "node_modules/react/lib/isEventSupported.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactEventEmitterMixin.js": {
            "uri": "./node_modules/react/lib/ReactEventEmitterMixin.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactEventEmitterMixin"
            },
            "deps": [
                "node_modules/react/lib/EventPluginHub.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/getVendorPrefixedEventName.js": {
            "uri": "./node_modules/react/lib/getVendorPrefixedEventName.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/getVendorPrefixedEventName"
            },
            "deps": [
                "node_modules/fbjs/lib/ExecutionEnvironment.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMButton.js": {
            "uri": "./node_modules/react/lib/ReactDOMButton.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMButton"
            },
            "deps": [
                "node_modules/react/lib/DisabledInputUtils.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/DisabledInputUtils.js": {
            "uri": "./node_modules/react/lib/DisabledInputUtils.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/DisabledInputUtils"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMInput.js": {
            "uri": "./node_modules/react/lib/ReactDOMInput.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMInput"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/DisabledInputUtils.js",
                "node_modules/react/lib/DOMPropertyOperations.js",
                "node_modules/react/lib/LinkedValueUtils.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactUpdates.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/LinkedValueUtils.js": {
            "uri": "./node_modules/react/lib/LinkedValueUtils.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/LinkedValueUtils"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactPropTypes.js",
                "node_modules/react/lib/ReactPropTypeLocations.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMOption.js": {
            "uri": "./node_modules/react/lib/ReactDOMOption.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMOption"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/ReactChildren.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactDOMSelect.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMSelect.js": {
            "uri": "./node_modules/react/lib/ReactDOMSelect.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMSelect"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/DisabledInputUtils.js",
                "node_modules/react/lib/LinkedValueUtils.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactUpdates.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMTextarea.js": {
            "uri": "./node_modules/react/lib/ReactDOMTextarea.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMTextarea"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/DisabledInputUtils.js",
                "node_modules/react/lib/LinkedValueUtils.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactUpdates.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactMultiChild.js": {
            "uri": "./node_modules/react/lib/ReactMultiChild.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactMultiChild"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactComponentEnvironment.js",
                "node_modules/react/lib/ReactInstanceMap.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/ReactMultiChildUpdateTypes.js",
                "node_modules/react/lib/ReactCurrentOwner.js",
                "node_modules/react/lib/ReactReconciler.js",
                "node_modules/react/lib/ReactChildReconciler.js",
                "node_modules/fbjs/lib/emptyFunction.js",
                "node_modules/react/lib/flattenChildren.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactComponentEnvironment.js": {
            "uri": "./node_modules/react/lib/ReactComponentEnvironment.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactComponentEnvironment"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactInstanceMap.js": {
            "uri": "./node_modules/react/lib/ReactInstanceMap.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactInstanceMap"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactChildReconciler.js": {
            "uri": "./node_modules/react/lib/ReactChildReconciler.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactChildReconciler"
            },
            "deps": [
                "node_modules/react/lib/ReactReconciler.js",
                "node_modules/react/lib/instantiateReactComponent.js",
                "node_modules/react/lib/KeyEscapeUtils.js",
                "node_modules/react/lib/shouldUpdateReactComponent.js",
                "node_modules/react/lib/traverseAllChildren.js",
                "node_modules/fbjs/lib/warning.js",
                "node_modules/react/lib/ReactComponentTreeDevtool.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/instantiateReactComponent.js": {
            "uri": "./node_modules/react/lib/instantiateReactComponent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/instantiateReactComponent"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/ReactCompositeComponent.js",
                "node_modules/react/lib/ReactEmptyComponent.js",
                "node_modules/react/lib/ReactHostComponent.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactCompositeComponent.js": {
            "uri": "./node_modules/react/lib/ReactCompositeComponent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactCompositeComponent"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/ReactComponentEnvironment.js",
                "node_modules/react/lib/ReactCurrentOwner.js",
                "node_modules/react/lib/ReactElement.js",
                "node_modules/react/lib/ReactErrorUtils.js",
                "node_modules/react/lib/ReactInstanceMap.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/ReactNodeTypes.js",
                "node_modules/react/lib/ReactPropTypeLocations.js",
                "node_modules/react/lib/ReactReconciler.js",
                "node_modules/react/lib/checkReactTypeSpec.js",
                "node_modules/fbjs/lib/emptyObject.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/react/lib/shouldUpdateReactComponent.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactNodeTypes.js": {
            "uri": "./node_modules/react/lib/ReactNodeTypes.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactNodeTypes"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactElement.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/shouldUpdateReactComponent.js": {
            "uri": "./node_modules/react/lib/shouldUpdateReactComponent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/shouldUpdateReactComponent"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactEmptyComponent.js": {
            "uri": "./node_modules/react/lib/ReactEmptyComponent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactEmptyComponent"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactHostComponent.js": {
            "uri": "./node_modules/react/lib/ReactHostComponent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactHostComponent"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/object-assign/index.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/flattenChildren.js": {
            "uri": "./node_modules/react/lib/flattenChildren.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/flattenChildren"
            },
            "deps": [
                "node_modules/react/lib/KeyEscapeUtils.js",
                "node_modules/react/lib/traverseAllChildren.js",
                "node_modules/fbjs/lib/warning.js",
                "node_modules/react/lib/ReactComponentTreeDevtool.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactServerRenderingTransaction.js": {
            "uri": "./node_modules/react/lib/ReactServerRenderingTransaction.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactServerRenderingTransaction"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/PooledClass.js",
                "node_modules/react/lib/Transaction.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/ReactServerUpdateQueue.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactServerUpdateQueue.js": {
            "uri": "./node_modules/react/lib/ReactServerUpdateQueue.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactServerUpdateQueue"
            },
            "deps": [
                "node_modules/react/lib/ReactUpdateQueue.js",
                "node_modules/react/lib/Transaction.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactUpdateQueue.js": {
            "uri": "./node_modules/react/lib/ReactUpdateQueue.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactUpdateQueue"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactCurrentOwner.js",
                "node_modules/react/lib/ReactInstanceMap.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/ReactUpdates.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/shallowEqual.js": {
            "uri": "./node_modules/fbjs/lib/shallowEqual.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/shallowEqual"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/validateDOMNesting.js": {
            "uri": "./node_modules/react/lib/validateDOMNesting.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/validateDOMNesting"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/fbjs/lib/emptyFunction.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMEmptyComponent.js": {
            "uri": "./node_modules/react/lib/ReactDOMEmptyComponent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMEmptyComponent"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/DOMLazyTree.js",
                "node_modules/react/lib/ReactDOMComponentTree.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMTreeTraversal.js": {
            "uri": "./node_modules/react/lib/ReactDOMTreeTraversal.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMTreeTraversal"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/fbjs/lib/invariant.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMTextComponent.js": {
            "uri": "./node_modules/react/lib/ReactDOMTextComponent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMTextComponent"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/DOMChildrenOperations.js",
                "node_modules/react/lib/DOMLazyTree.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/escapeTextContentForBrowser.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/react/lib/validateDOMNesting.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDefaultBatchingStrategy.js": {
            "uri": "./node_modules/react/lib/ReactDefaultBatchingStrategy.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDefaultBatchingStrategy"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/ReactUpdates.js",
                "node_modules/react/lib/Transaction.js",
                "node_modules/fbjs/lib/emptyFunction.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactEventListener.js": {
            "uri": "./node_modules/react/lib/ReactEventListener.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactEventListener"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/fbjs/lib/EventListener.js",
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/react/lib/PooledClass.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactUpdates.js",
                "node_modules/react/lib/getEventTarget.js",
                "node_modules/fbjs/lib/getUnboundedScrollPosition.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/EventListener.js": {
            "uri": "./node_modules/fbjs/lib/EventListener.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/EventListener"
            },
            "deps": [
                "node_modules/fbjs/lib/emptyFunction.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/getUnboundedScrollPosition.js": {
            "uri": "./node_modules/fbjs/lib/getUnboundedScrollPosition.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/getUnboundedScrollPosition"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactInjection.js": {
            "uri": "./node_modules/react/lib/ReactInjection.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactInjection"
            },
            "deps": [
                "node_modules/react/lib/DOMProperty.js",
                "node_modules/react/lib/EventPluginHub.js",
                "node_modules/react/lib/EventPluginUtils.js",
                "node_modules/react/lib/ReactComponentEnvironment.js",
                "node_modules/react/lib/ReactClass.js",
                "node_modules/react/lib/ReactEmptyComponent.js",
                "node_modules/react/lib/ReactBrowserEventEmitter.js",
                "node_modules/react/lib/ReactHostComponent.js",
                "node_modules/react/lib/ReactUpdates.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactReconcileTransaction.js": {
            "uri": "./node_modules/react/lib/ReactReconcileTransaction.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactReconcileTransaction"
            },
            "deps": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/CallbackQueue.js",
                "node_modules/react/lib/PooledClass.js",
                "node_modules/react/lib/ReactBrowserEventEmitter.js",
                "node_modules/react/lib/ReactInputSelection.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/Transaction.js",
                "node_modules/react/lib/ReactUpdateQueue.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactInputSelection.js": {
            "uri": "./node_modules/react/lib/ReactInputSelection.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactInputSelection"
            },
            "deps": [
                "node_modules/react/lib/ReactDOMSelection.js",
                "node_modules/fbjs/lib/containsNode.js",
                "node_modules/fbjs/lib/focusNode.js",
                "node_modules/fbjs/lib/getActiveElement.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMSelection.js": {
            "uri": "./node_modules/react/lib/ReactDOMSelection.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMSelection"
            },
            "deps": [
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/react/lib/getNodeForCharacterOffset.js",
                "node_modules/react/lib/getTextContentAccessor.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/getNodeForCharacterOffset.js": {
            "uri": "./node_modules/react/lib/getNodeForCharacterOffset.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/getNodeForCharacterOffset"
            },
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/containsNode.js": {
            "uri": "./node_modules/fbjs/lib/containsNode.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/containsNode"
            },
            "deps": [
                "node_modules/fbjs/lib/isTextNode.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/isTextNode.js": {
            "uri": "./node_modules/fbjs/lib/isTextNode.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/isTextNode"
            },
            "deps": [
                "node_modules/fbjs/lib/isNode.js"
            ],
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/isNode.js": {
            "uri": "./node_modules/fbjs/lib/isNode.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/isNode"
            },
            "pkg": "p0"
        },
        "node_modules/fbjs/lib/getActiveElement.js": {
            "uri": "./node_modules/fbjs/lib/getActiveElement.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/fbjs/lib/getActiveElement"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/SVGDOMPropertyConfig.js": {
            "uri": "./node_modules/react/lib/SVGDOMPropertyConfig.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SVGDOMPropertyConfig"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/SelectEventPlugin.js": {
            "uri": "./node_modules/react/lib/SelectEventPlugin.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SelectEventPlugin"
            },
            "deps": [
                "node_modules/react/lib/EventConstants.js",
                "node_modules/react/lib/EventPropagators.js",
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactInputSelection.js",
                "node_modules/react/lib/SyntheticEvent.js",
                "node_modules/fbjs/lib/getActiveElement.js",
                "node_modules/react/lib/isTextInputElement.js",
                "node_modules/fbjs/lib/keyOf.js",
                "node_modules/fbjs/lib/shallowEqual.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SimpleEventPlugin.js": {
            "uri": "./node_modules/react/lib/SimpleEventPlugin.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SimpleEventPlugin"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/EventConstants.js",
                "node_modules/fbjs/lib/EventListener.js",
                "node_modules/react/lib/EventPropagators.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/SyntheticAnimationEvent.js",
                "node_modules/react/lib/SyntheticClipboardEvent.js",
                "node_modules/react/lib/SyntheticEvent.js",
                "node_modules/react/lib/SyntheticFocusEvent.js",
                "node_modules/react/lib/SyntheticKeyboardEvent.js",
                "node_modules/react/lib/SyntheticMouseEvent.js",
                "node_modules/react/lib/SyntheticDragEvent.js",
                "node_modules/react/lib/SyntheticTouchEvent.js",
                "node_modules/react/lib/SyntheticTransitionEvent.js",
                "node_modules/react/lib/SyntheticUIEvent.js",
                "node_modules/react/lib/SyntheticWheelEvent.js",
                "node_modules/fbjs/lib/emptyFunction.js",
                "node_modules/react/lib/getEventCharCode.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/keyOf.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticAnimationEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticAnimationEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticAnimationEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticEvent.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticClipboardEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticClipboardEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticClipboardEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticEvent.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticFocusEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticFocusEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticFocusEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticUIEvent.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticKeyboardEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticKeyboardEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticKeyboardEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticUIEvent.js",
                "node_modules/react/lib/getEventCharCode.js",
                "node_modules/react/lib/getEventKey.js",
                "node_modules/react/lib/getEventModifierState.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/getEventCharCode.js": {
            "uri": "./node_modules/react/lib/getEventCharCode.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/getEventCharCode"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/getEventKey.js": {
            "uri": "./node_modules/react/lib/getEventKey.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/getEventKey"
            },
            "deps": [
                "node_modules/react/lib/getEventCharCode.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticDragEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticDragEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticDragEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticMouseEvent.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticTouchEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticTouchEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticTouchEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticUIEvent.js",
                "node_modules/react/lib/getEventModifierState.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticTransitionEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticTransitionEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticTransitionEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticEvent.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/SyntheticWheelEvent.js": {
            "uri": "./node_modules/react/lib/SyntheticWheelEvent.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/SyntheticWheelEvent"
            },
            "deps": [
                "node_modules/react/lib/SyntheticMouseEvent.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactMount.js": {
            "uri": "./node_modules/react/lib/ReactMount.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactMount"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/DOMLazyTree.js",
                "node_modules/react/lib/DOMProperty.js",
                "node_modules/react/lib/ReactBrowserEventEmitter.js",
                "node_modules/react/lib/ReactCurrentOwner.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactDOMContainerInfo.js",
                "node_modules/react/lib/ReactDOMFeatureFlags.js",
                "node_modules/react/lib/ReactElement.js",
                "node_modules/react/lib/ReactFeatureFlags.js",
                "node_modules/react/lib/ReactInstanceMap.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/ReactMarkupChecksum.js",
                "node_modules/react/lib/ReactReconciler.js",
                "node_modules/react/lib/ReactUpdateQueue.js",
                "node_modules/react/lib/ReactUpdates.js",
                "node_modules/fbjs/lib/emptyObject.js",
                "node_modules/react/lib/instantiateReactComponent.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/react/lib/setInnerHTML.js",
                "node_modules/react/lib/shouldUpdateReactComponent.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMContainerInfo.js": {
            "uri": "./node_modules/react/lib/ReactDOMContainerInfo.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMContainerInfo"
            },
            "deps": [
                "node_modules/react/lib/validateDOMNesting.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactDOMFeatureFlags.js": {
            "uri": "./node_modules/react/lib/ReactDOMFeatureFlags.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactDOMFeatureFlags"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/ReactMarkupChecksum.js": {
            "uri": "./node_modules/react/lib/ReactMarkupChecksum.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/ReactMarkupChecksum"
            },
            "deps": [
                "node_modules/react/lib/adler32.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/adler32.js": {
            "uri": "./node_modules/react/lib/adler32.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/adler32"
            },
            "pkg": "p0"
        },
        "node_modules/react/lib/findDOMNode.js": {
            "uri": "./node_modules/react/lib/findDOMNode.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/findDOMNode"
            },
            "deps": [
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/react/lib/ReactCurrentOwner.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/ReactInstanceMap.js",
                "node_modules/react/lib/getHostComponentFromComposite.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/fbjs/lib/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/getHostComponentFromComposite.js": {
            "uri": "./node_modules/react/lib/getHostComponentFromComposite.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/getHostComponentFromComposite"
            },
            "deps": [
                "node_modules/react/lib/ReactNodeTypes.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react/lib/renderSubtreeIntoContainer.js": {
            "uri": "./node_modules/react/lib/renderSubtreeIntoContainer.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react/lib/renderSubtreeIntoContainer"
            },
            "deps": [
                "node_modules/react/lib/ReactMount.js"
            ],
            "pkg": "p0"
        },
        "pages/redux/action": {
            "uri": "./pages/redux/action.js",
            "type": "js",
            "pkg": "p2"
        },
        "pages/redux/app": {
            "uri": "./pages/redux/app.js",
            "type": "js",
            "deps": [
                "node_modules/react/react.js",
                "node_modules/redux/lib/index.js",
                "node_modules/react-redux/lib/index.js",
                "pages/redux/input",
                "pages/redux/action"
            ],
            "pkg": "p2"
        },
        "node_modules/redux/lib/index.js": {
            "uri": "./node_modules/redux/lib/index.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/redux/lib/index"
            },
            "deps": [
                "node_modules/redux/lib/createStore.js",
                "node_modules/redux/lib/combineReducers.js",
                "node_modules/redux/lib/bindActionCreators.js",
                "node_modules/redux/lib/applyMiddleware.js",
                "node_modules/redux/lib/compose.js",
                "node_modules/redux/lib/utils/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/redux/lib/createStore.js": {
            "uri": "./node_modules/redux/lib/createStore.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/redux/lib/createStore"
            },
            "deps": [
                "node_modules/lodash/isPlainObject.js",
                "node_modules/symbol-observable/index.js"
            ],
            "pkg": "p0"
        },
        "node_modules/lodash/isPlainObject.js": {
            "uri": "./node_modules/lodash/isPlainObject.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/lodash/isPlainObject"
            },
            "deps": [
                "node_modules/lodash/_getPrototype.js",
                "node_modules/lodash/_isHostObject.js",
                "node_modules/lodash/isObjectLike.js"
            ],
            "pkg": "p0"
        },
        "node_modules/lodash/_getPrototype.js": {
            "uri": "./node_modules/lodash/_getPrototype.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/lodash/_getPrototype"
            },
            "deps": [
                "node_modules/lodash/_overArg.js"
            ],
            "pkg": "p0"
        },
        "node_modules/lodash/_overArg.js": {
            "uri": "./node_modules/lodash/_overArg.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/lodash/_overArg"
            },
            "pkg": "p0"
        },
        "node_modules/lodash/_isHostObject.js": {
            "uri": "./node_modules/lodash/_isHostObject.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/lodash/_isHostObject"
            },
            "pkg": "p0"
        },
        "node_modules/lodash/isObjectLike.js": {
            "uri": "./node_modules/lodash/isObjectLike.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/lodash/isObjectLike"
            },
            "pkg": "p0"
        },
        "node_modules/symbol-observable/index.js": {
            "uri": "./node_modules/symbol-observable/index.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/symbol-observable/index"
            },
            "deps": [
                "node_modules/symbol-observable/ponyfill.js"
            ],
            "pkg": "p0"
        },
        "node_modules/symbol-observable/ponyfill.js": {
            "uri": "./node_modules/symbol-observable/ponyfill.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/symbol-observable/ponyfill"
            },
            "pkg": "p0"
        },
        "node_modules/redux/lib/combineReducers.js": {
            "uri": "./node_modules/redux/lib/combineReducers.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/redux/lib/combineReducers"
            },
            "deps": [
                "node_modules/redux/lib/createStore.js",
                "node_modules/lodash/isPlainObject.js",
                "node_modules/redux/lib/utils/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/redux/lib/utils/warning.js": {
            "uri": "./node_modules/redux/lib/utils/warning.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/redux/lib/utils/warning"
            },
            "pkg": "p0"
        },
        "node_modules/redux/lib/bindActionCreators.js": {
            "uri": "./node_modules/redux/lib/bindActionCreators.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/redux/lib/bindActionCreators"
            },
            "pkg": "p0"
        },
        "node_modules/redux/lib/applyMiddleware.js": {
            "uri": "./node_modules/redux/lib/applyMiddleware.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/redux/lib/applyMiddleware"
            },
            "deps": [
                "node_modules/redux/lib/compose.js"
            ],
            "pkg": "p0"
        },
        "node_modules/redux/lib/compose.js": {
            "uri": "./node_modules/redux/lib/compose.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/redux/lib/compose"
            },
            "pkg": "p0"
        },
        "node_modules/react-redux/lib/index.js": {
            "uri": "./node_modules/react-redux/lib/index.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react-redux/lib/index"
            },
            "deps": [
                "node_modules/react-redux/lib/components/Provider.js",
                "node_modules/react-redux/lib/components/connect.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react-redux/lib/components/Provider.js": {
            "uri": "./node_modules/react-redux/lib/components/Provider.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react-redux/lib/components/Provider"
            },
            "deps": [
                "node_modules/react/react.js",
                "node_modules/react-redux/lib/utils/storeShape.js",
                "node_modules/react-redux/lib/utils/warning.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react-redux/lib/utils/storeShape.js": {
            "uri": "./node_modules/react-redux/lib/utils/storeShape.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react-redux/lib/utils/storeShape"
            },
            "deps": [
                "node_modules/react/react.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react-redux/lib/utils/warning.js": {
            "uri": "./node_modules/react-redux/lib/utils/warning.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react-redux/lib/utils/warning"
            },
            "pkg": "p0"
        },
        "node_modules/react-redux/lib/components/connect.js": {
            "uri": "./node_modules/react-redux/lib/components/connect.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react-redux/lib/components/connect"
            },
            "deps": [
                "node_modules/react/react.js",
                "node_modules/react-redux/lib/utils/storeShape.js",
                "node_modules/react-redux/lib/utils/shallowEqual.js",
                "node_modules/react-redux/lib/utils/wrapActionCreators.js",
                "node_modules/react-redux/lib/utils/warning.js",
                "node_modules/lodash/isPlainObject.js",
                "node_modules/hoist-non-react-statics/index.js",
                "node_modules/invariant/browser.js"
            ],
            "pkg": "p0"
        },
        "node_modules/react-redux/lib/utils/shallowEqual.js": {
            "uri": "./node_modules/react-redux/lib/utils/shallowEqual.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react-redux/lib/utils/shallowEqual"
            },
            "pkg": "p0"
        },
        "node_modules/react-redux/lib/utils/wrapActionCreators.js": {
            "uri": "./node_modules/react-redux/lib/utils/wrapActionCreators.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/react-redux/lib/utils/wrapActionCreators"
            },
            "deps": [
                "node_modules/redux/lib/index.js"
            ],
            "pkg": "p0"
        },
        "node_modules/hoist-non-react-statics/index.js": {
            "uri": "./node_modules/hoist-non-react-statics/index.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/hoist-non-react-statics/index"
            },
            "pkg": "p0"
        },
        "node_modules/invariant/browser.js": {
            "uri": "./node_modules/invariant/browser.js",
            "type": "js",
            "extras": {
                "moduleId": "node_modules/invariant/browser"
            },
            "pkg": "p0"
        },
        "pages/redux/input": {
            "uri": "./pages/redux/input.js",
            "type": "js",
            "deps": [
                "node_modules/react/react.js"
            ],
            "pkg": "p2"
        },
        "pages/redux/index": {
            "uri": "./pages/redux/index.js",
            "type": "js",
            "deps": [
                "node_modules/react/react.js",
                "node_modules/react-dom/index.js",
                "node_modules/react-redux/lib/index.js",
                "pages/redux/store",
                "pages/redux/app"
            ],
            "pkg": "p2"
        },
        "pages/redux/store": {
            "uri": "./pages/redux/store.js",
            "type": "js",
            "deps": [
                "node_modules/redux/lib/index.js",
                "pages/redux/reducer"
            ],
            "pkg": "p2"
        },
        "pages/redux/reducer": {
            "uri": "./pages/redux/reducer.js",
            "type": "js",
            "deps": [
                "node_modules/redux/lib/index.js",
                "pages/redux/reducer-add"
            ],
            "pkg": "p2"
        },
        "pages/redux/reducer-add": {
            "uri": "./pages/redux/reducer-add.js",
            "type": "js",
            "pkg": "p2"
        }
    },
    "pkg": {
        "p0": {
            "uri": "./pkg/react.js",
            "type": "js",
            "has": [
                "node_modules/object-assign/index.js",
                "node_modules/react/lib/reactProdInvariant.js",
                "node_modules/fbjs/lib/invariant.js",
                "node_modules/react/lib/PooledClass.js",
                "node_modules/react/lib/ReactCurrentOwner.js",
                "node_modules/fbjs/lib/emptyFunction.js",
                "node_modules/fbjs/lib/warning.js",
                "node_modules/react/lib/canDefineProperty.js",
                "node_modules/react/lib/ReactElement.js",
                "node_modules/react/lib/getIteratorFn.js",
                "node_modules/react/lib/KeyEscapeUtils.js",
                "node_modules/react/lib/traverseAllChildren.js",
                "node_modules/react/lib/ReactChildren.js",
                "node_modules/react/lib/ReactNoopUpdateQueue.js",
                "node_modules/fbjs/lib/emptyObject.js",
                "node_modules/react/lib/ReactComponent.js",
                "node_modules/fbjs/lib/keyMirror.js",
                "node_modules/react/lib/ReactPropTypeLocations.js",
                "node_modules/react/lib/ReactPropTypeLocationNames.js",
                "node_modules/fbjs/lib/keyOf.js",
                "node_modules/react/lib/ReactClass.js",
                "node_modules/fbjs/lib/mapObject.js",
                "node_modules/react/lib/ReactComponentTreeDevtool.js",
                "node_modules/react/lib/checkReactTypeSpec.js",
                "node_modules/react/lib/ReactElementValidator.js",
                "node_modules/react/lib/ReactDOMFactories.js",
                "node_modules/react/lib/ReactPropTypes.js",
                "node_modules/react/lib/ReactVersion.js",
                "node_modules/react/lib/onlyChild.js",
                "node_modules/react/lib/React.js",
                "node_modules/react/react.js",
                "node_modules/react/lib/DOMProperty.js",
                "node_modules/react/lib/ReactDOMComponentFlags.js",
                "node_modules/react/lib/ReactDOMComponentTree.js",
                "node_modules/react/lib/EventConstants.js",
                "node_modules/react/lib/EventPluginRegistry.js",
                "node_modules/react/lib/ReactErrorUtils.js",
                "node_modules/react/lib/EventPluginUtils.js",
                "node_modules/react/lib/accumulateInto.js",
                "node_modules/react/lib/forEachAccumulated.js",
                "node_modules/react/lib/EventPluginHub.js",
                "node_modules/react/lib/EventPropagators.js",
                "node_modules/fbjs/lib/ExecutionEnvironment.js",
                "node_modules/react/lib/getTextContentAccessor.js",
                "node_modules/react/lib/FallbackCompositionState.js",
                "node_modules/react/lib/SyntheticEvent.js",
                "node_modules/react/lib/SyntheticCompositionEvent.js",
                "node_modules/react/lib/SyntheticInputEvent.js",
                "node_modules/react/lib/BeforeInputEventPlugin.js",
                "node_modules/react/lib/CallbackQueue.js",
                "node_modules/react/lib/ReactFeatureFlags.js",
                "node_modules/react/lib/ReactOwner.js",
                "node_modules/react/lib/ReactRef.js",
                "node_modules/react/lib/ReactInvalidSetStateWarningDevTool.js",
                "node_modules/react/lib/ReactHostOperationHistoryDevtool.js",
                "node_modules/fbjs/lib/performance.js",
                "node_modules/fbjs/lib/performanceNow.js",
                "node_modules/react/lib/ReactDebugTool.js",
                "node_modules/react/lib/ReactInstrumentation.js",
                "node_modules/react/lib/ReactReconciler.js",
                "node_modules/react/lib/Transaction.js",
                "node_modules/react/lib/ReactUpdates.js",
                "node_modules/react/lib/getEventTarget.js",
                "node_modules/react/lib/isEventSupported.js",
                "node_modules/react/lib/isTextInputElement.js",
                "node_modules/react/lib/ChangeEventPlugin.js",
                "node_modules/react/lib/DefaultEventPluginOrder.js",
                "node_modules/react/lib/SyntheticUIEvent.js",
                "node_modules/react/lib/ViewportMetrics.js",
                "node_modules/react/lib/getEventModifierState.js",
                "node_modules/react/lib/SyntheticMouseEvent.js",
                "node_modules/react/lib/EnterLeaveEventPlugin.js",
                "node_modules/react/lib/HTMLDOMPropertyConfig.js",
                "node_modules/react/lib/DOMNamespaces.js",
                "node_modules/react/lib/createMicrosoftUnsafeLocalFunction.js",
                "node_modules/react/lib/setInnerHTML.js",
                "node_modules/react/lib/escapeTextContentForBrowser.js",
                "node_modules/react/lib/setTextContent.js",
                "node_modules/react/lib/DOMLazyTree.js",
                "node_modules/fbjs/lib/createArrayFromMixed.js",
                "node_modules/fbjs/lib/getMarkupWrap.js",
                "node_modules/fbjs/lib/createNodesFromMarkup.js",
                "node_modules/react/lib/Danger.js",
                "node_modules/react/lib/ReactMultiChildUpdateTypes.js",
                "node_modules/react/lib/DOMChildrenOperations.js",
                "node_modules/react/lib/ReactDOMIDOperations.js",
                "node_modules/react/lib/ReactComponentBrowserEnvironment.js",
                "node_modules/fbjs/lib/focusNode.js",
                "node_modules/react/lib/AutoFocusUtils.js",
                "node_modules/react/lib/CSSProperty.js",
                "node_modules/fbjs/lib/camelize.js",
                "node_modules/fbjs/lib/camelizeStyleName.js",
                "node_modules/react/lib/dangerousStyleValue.js",
                "node_modules/fbjs/lib/hyphenate.js",
                "node_modules/fbjs/lib/hyphenateStyleName.js",
                "node_modules/fbjs/lib/memoizeStringOnly.js",
                "node_modules/react/lib/CSSPropertyOperations.js",
                "node_modules/react/lib/ReactDOMNullInputValuePropDevtool.js",
                "node_modules/react/lib/ReactDOMUnknownPropertyDevtool.js",
                "node_modules/react/lib/ReactDOMDebugTool.js",
                "node_modules/react/lib/ReactDOMInstrumentation.js",
                "node_modules/react/lib/quoteAttributeValueForBrowser.js",
                "node_modules/react/lib/DOMPropertyOperations.js",
                "node_modules/react/lib/ReactEventEmitterMixin.js",
                "node_modules/react/lib/getVendorPrefixedEventName.js",
                "node_modules/react/lib/ReactBrowserEventEmitter.js",
                "node_modules/react/lib/DisabledInputUtils.js",
                "node_modules/react/lib/ReactDOMButton.js",
                "node_modules/react/lib/LinkedValueUtils.js",
                "node_modules/react/lib/ReactDOMInput.js",
                "node_modules/react/lib/ReactDOMSelect.js",
                "node_modules/react/lib/ReactDOMOption.js",
                "node_modules/react/lib/ReactDOMTextarea.js",
                "node_modules/react/lib/ReactComponentEnvironment.js",
                "node_modules/react/lib/ReactInstanceMap.js",
                "node_modules/react/lib/ReactNodeTypes.js",
                "node_modules/react/lib/shouldUpdateReactComponent.js",
                "node_modules/react/lib/ReactCompositeComponent.js",
                "node_modules/react/lib/ReactEmptyComponent.js",
                "node_modules/react/lib/ReactHostComponent.js",
                "node_modules/react/lib/instantiateReactComponent.js",
                "node_modules/react/lib/ReactChildReconciler.js",
                "node_modules/react/lib/flattenChildren.js",
                "node_modules/react/lib/ReactMultiChild.js",
                "node_modules/react/lib/ReactUpdateQueue.js",
                "node_modules/react/lib/ReactServerUpdateQueue.js",
                "node_modules/react/lib/ReactServerRenderingTransaction.js",
                "node_modules/fbjs/lib/shallowEqual.js",
                "node_modules/react/lib/validateDOMNesting.js",
                "node_modules/react/lib/ReactDOMComponent.js",
                "node_modules/react/lib/ReactDOMEmptyComponent.js",
                "node_modules/react/lib/ReactDOMTreeTraversal.js",
                "node_modules/react/lib/ReactDOMTextComponent.js",
                "node_modules/react/lib/ReactDefaultBatchingStrategy.js",
                "node_modules/fbjs/lib/EventListener.js",
                "node_modules/fbjs/lib/getUnboundedScrollPosition.js",
                "node_modules/react/lib/ReactEventListener.js",
                "node_modules/react/lib/ReactInjection.js",
                "node_modules/react/lib/getNodeForCharacterOffset.js",
                "node_modules/react/lib/ReactDOMSelection.js",
                "node_modules/fbjs/lib/isNode.js",
                "node_modules/fbjs/lib/isTextNode.js",
                "node_modules/fbjs/lib/containsNode.js",
                "node_modules/fbjs/lib/getActiveElement.js",
                "node_modules/react/lib/ReactInputSelection.js",
                "node_modules/react/lib/ReactReconcileTransaction.js",
                "node_modules/react/lib/SVGDOMPropertyConfig.js",
                "node_modules/react/lib/SelectEventPlugin.js",
                "node_modules/react/lib/SyntheticAnimationEvent.js",
                "node_modules/react/lib/SyntheticClipboardEvent.js",
                "node_modules/react/lib/SyntheticFocusEvent.js",
                "node_modules/react/lib/getEventCharCode.js",
                "node_modules/react/lib/getEventKey.js",
                "node_modules/react/lib/SyntheticKeyboardEvent.js",
                "node_modules/react/lib/SyntheticDragEvent.js",
                "node_modules/react/lib/SyntheticTouchEvent.js",
                "node_modules/react/lib/SyntheticTransitionEvent.js",
                "node_modules/react/lib/SyntheticWheelEvent.js",
                "node_modules/react/lib/SimpleEventPlugin.js",
                "node_modules/react/lib/ReactDefaultInjection.js",
                "node_modules/react/lib/ReactDOMContainerInfo.js",
                "node_modules/react/lib/ReactDOMFeatureFlags.js",
                "node_modules/react/lib/adler32.js",
                "node_modules/react/lib/ReactMarkupChecksum.js",
                "node_modules/react/lib/ReactMount.js",
                "node_modules/react/lib/getHostComponentFromComposite.js",
                "node_modules/react/lib/findDOMNode.js",
                "node_modules/react/lib/renderSubtreeIntoContainer.js",
                "node_modules/react/lib/ReactDOM.js",
                "node_modules/react-dom/index.js",
                "node_modules/react-redux/lib/utils/storeShape.js",
                "node_modules/react-redux/lib/utils/warning.js",
                "node_modules/react-redux/lib/components/Provider.js",
                "node_modules/react-redux/lib/utils/shallowEqual.js",
                "node_modules/lodash/_overArg.js",
                "node_modules/lodash/_getPrototype.js",
                "node_modules/lodash/_isHostObject.js",
                "node_modules/lodash/isObjectLike.js",
                "node_modules/lodash/isPlainObject.js",
                "node_modules/symbol-observable/ponyfill.js",
                "node_modules/symbol-observable/index.js",
                "node_modules/redux/lib/createStore.js",
                "node_modules/redux/lib/utils/warning.js",
                "node_modules/redux/lib/combineReducers.js",
                "node_modules/redux/lib/bindActionCreators.js",
                "node_modules/redux/lib/compose.js",
                "node_modules/redux/lib/applyMiddleware.js",
                "node_modules/redux/lib/index.js",
                "node_modules/react-redux/lib/utils/wrapActionCreators.js",
                "node_modules/hoist-non-react-statics/index.js",
                "node_modules/invariant/browser.js",
                "node_modules/react-redux/lib/components/connect.js",
                "node_modules/react-redux/lib/index.js"
            ]
        },
        "p1": {
            "uri": "./pkg/index.js",
            "type": "js",
            "has": [
                "node_modules/classnames/index.js",
                "modules/dialog/dialog",
                "pages/index/container",
                "pages/index/index"
            ],
            "deps": [
                "modules/dialog/dialog.css",
                "node_modules/react/react.js",
                "node_modules/react-dom/index.js"
            ]
        },
        "p2": {
            "uri": "./pkg/redux.js",
            "type": "js",
            "has": [
                "pages/redux/reducer-add",
                "pages/redux/reducer",
                "pages/redux/store",
                "pages/redux/input",
                "pages/redux/action",
                "pages/redux/app",
                "pages/redux/index"
            ],
            "deps": [
                "node_modules/redux/lib/index.js",
                "node_modules/react/react.js",
                "node_modules/react-redux/lib/index.js",
                "node_modules/react-dom/index.js"
            ]
        }
    }
});