
import React, { PureComponent } from 'react'
import { Image } from 'react-native'

type Props = {
    normalImage:any,
    selectedImage:any,
    focused:boolean,
}


class TabBarItem extends PureComponent<Props> {
    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <Image style={{width: 25, height: 25 }}
                   source={this.props.focused ? selectedImage : this.props.normalImage}
            />
        )
    }
}


export default TabBarItem
