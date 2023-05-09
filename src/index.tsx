import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {React, Linking, Toasts} from 'enmity/metro/common'
import {create} from 'enmity/patcher'
// @ts-ignore
import manifest, {name as plugin_name} from '../manifest.json'
import Settings from "./components/Settings"
import {getByName} from "enmity/metro"
import {getByProps} from "enmity/modules"
import {getIDByName} from "enmity/api/assets"

const Patcher = create('BetterBioText')

const BioTexts = getByName("BioText", {default: false, all: true})
const Clipboard = getByProps('setString')
const CopyIcon = getIDByName('ic_message_copy')

const BetterBioText: Plugin = {
    ...manifest,
    onStart() {
        BioTexts.forEach((BioText) => {
            Patcher.after(BioText, "default", (self, args, res) => {
                res.props.onLongPress = () => {
                    Clipboard.setString(args[0].bio)
                    Toasts.open({
                        content: `Copied bio text to clipboard`,
                        source: CopyIcon
                    })
                }
                res.props.children.forEach((obj, idx) => {
                    if (obj?.props?.accessibilityRole === "link") {
                        let link = obj.props.children[0]
                        // NOTE: it doesn't work with obj ... = ...
                        res.props.children[idx].props.onPress = () => {
                            Linking.openURL(link)
                        }
                        res.props.children[idx].props.onLongPress = () => {
                            Clipboard.setString(link)
                            Toasts.open({
                                content: `Copied URL to clipboard`,
                                source: CopyIcon
                            })
                        }
                    }
                })
            })
        })
    },
    onStop() {
        Patcher.unpatchAll()
    }
    ,
    getSettingsPanel({settings}) {
        return <Settings settings={settings}/>
    }
}

registerPlugin(BetterBioText)
