function b(n){window.enmity.plugins.registerPlugin(n)}const c=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const y=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const F=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const l=window.enmity.modules.common.Linking,C=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function E(n){return window.enmity.patcher.create(n)}var B="BetterBioText",g="1.0.0",I="adds some extra actions like copying on Long press, clicking on press",A=[{name:"mafu",id:"519760564755365888"}],L="#ffc0cb",R={name:B,version:g,description:I,authors:A,color:L};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const x=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const P=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const a=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const p=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const i=e.FormRow,N=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function r(n){return window.enmity.assets.getIDByName(n)}function h(...n){return window.enmity.modules.getByProps(...n)}function k(...n){return window.enmity.modules.getByName(...n)}window.enmity.modules.common;const D=r("img_account_sync_github_white"),_=r("Discord"),M=r("img_account_sync_twitter_white"),V=h("acceptInviteAndTransitionToInviteChannel");var H=({settings:n})=>{const t=C.createThemedStyleSheet({container:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:c.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:c.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:c.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}});return o.createElement(P,null,o.createElement(p,{style:t.container},o.createElement(x,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:t.image}),o.createElement(p,{style:t.title},o.createElement(a,{style:t.name},"BetterBioText"),o.createElement(a,{style:t.author},"by mafu"))),o.createElement(N,{title:"INFORMATION"},o.createElement(i,{label:"Follow me on Twitter",style:t.info,trailing:i.Arrow,leading:o.createElement(i.Icon,{source:M}),onPress:()=>{l.openURL("https://twitter.com/m4fn3")}}),o.createElement(i,{label:"Visit my server for help",style:t.info,trailing:i.Arrow,leading:o.createElement(i.Icon,{source:_}),onPress:()=>{V.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{F.pop()}})}}),o.createElement(i,{label:"Check Source on GitHub",style:t.info,trailing:i.Arrow,leading:o.createElement(i.Icon,{source:D}),onPress:()=>{l.openURL("https://github.com/m4fn3/BetterBioText")}})),o.createElement(a,{style:t.footer},`v${g}`))};const T=E("BetterBioText"),O=k("BioText",{default:!1,all:!0}),S=h("setString"),f=r("ic_message_copy"),U={...R,onStart(){O.forEach(n=>{T.after(n,"default",(t,v,m)=>{m.props.onLongPress=()=>{S.setString(v[0].bio),y.open({content:"Copied bio text to clipboard",source:f})},m.props.children.forEach((s,d)=>{var w;if(((w=s==null?void 0:s.props)==null?void 0:w.accessibilityRole)==="link"){let u=s.props.children[0];m.props.children[d].props.onPress=()=>{l.openURL(u)},m.props.children[d].props.onLongPress=()=>{S.setString(u),y.open({content:"Copied URL to clipboard",source:f})}}})})})},onStop(){T.unpatchAll()},getSettingsPanel({settings:n}){return o.createElement(H,{settings:n})}};b(U);
