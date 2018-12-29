import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import avatar from '@lugia/lugia-web/dist/avatar/lugia.avatar.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const ShapeAvatar =  require('./ShapeAvatar').default;  const SizeAvatar =  require('./SizeAvatar').default;  const TypeAvatar =  require('./TypeAvatar').default;  const ComboAvatar =  require('./ComboAvatar').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'头像'} subTitle={'Avatar'} desc={'用来代表用户或事物，支持图片、图标或字符展示。'} />
                            <Demo title={'头像的形状'} titleID={'avatar-0'} code={<code>{ "/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Avatar, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\nconst Wrapper = styled.div`\n  float: left;\n  margin-left: 50px;\n  text-align: center;\n  padding: 20px;\n`;\nexport default class ShapeAvatar extends React.Component<any, any> {\n\n  render () {\n    const view = {\n      [ Widget.Avatar ]: {\n        color: \'white\',\n        backgroundColor: \'#cccccc\',\n        margin: 10\n      },\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Avatar viewClass=\"register\" shape={\'square\'} name={\'lug\'}/>\n          <Avatar viewClass=\"register\" shape={\'square\'} name={\'lugia\'}/>\n          <br/>\n          <Avatar viewClass=\"register\" shape={\'circle\'} name={\'lug\'}/>\n          <Avatar viewClass=\"register\" shape={\'circle\'} name={\'lugia\'}/>\n        </Wrapper>\n      </Theme>);\n  }\n}\n"}</code>} desc={'可以选择圆形 和方形 两种风格'}  demo={<ShapeAvatar />}></Demo><Demo title={'头像的尺寸'} titleID={'avatar-1'} code={<code>{ "/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Avatar, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  float: left;\n  margin-left: 50px;\n  text-align: center;\n  padding: 20px;\n`;\nexport default class SizeAvatar extends React.Component<any, any> {\n\n  render () {\n    const view = {\n      [ Widget.Avatar ]: {\n        color: \'white\',\n        backgroundColor: \'#cccccc\',\n        margin: 10\n      },\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Avatar shape={\'circle\'} size={\'small\'} name={\'L\'}/>\n          <Avatar shape={\'circle\'} size={\'default\'} name={\'lug\'}/>\n          <Avatar shape={\'circle\'} size={\'large\'} name={\'lugia\'}/>\n          <br/>\n          <Avatar shape={\'square\'} size={\'small\'} name={\'L\'}/>\n          <Avatar shape={\'square\'} size={\'default\'} name={\'lug\'}/>\n          <Avatar shape={\'square\'} size={\'large\'} name={\'lugia\'}/>\n        </Wrapper>\n      </Theme>);\n  }\n}\n"}</code>} desc={'可以选择三种尺寸头像'}  demo={<SizeAvatar />}></Demo><Demo title={'头像风格'} titleID={'avatar-2'} code={<code>{ "/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Avatar, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  float: left;\n  margin-left: 50px;\n  text-align: center;\n  padding: 20px;\n`;\nexport default class TypeAvatar extends React.Component<any, any> {\n\n  render () {\n    const view = {\n      [ Widget.Avatar ]: {\n        color: \'white\',\n        backgroundColor: \'#cccccc\',\n        margin: 10\n      },\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Avatar shape={\'circle\'} src={\'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/master/lugiaweb%E7%BB%84%E4%BB%B6/%E5%A4%B4%E5%83%8F/32.jpg\'}/>\n          <Avatar shape={\'circle\'} name={\'lugia\'}/>\n          <Avatar shape={\'circle\'} icon={\'lugia-icon-financial_user\'}/>\n          <br/>\n          <Avatar shape={\'square\'} src={\'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/master/lugiaweb%E7%BB%84%E4%BB%B6/%E5%A4%B4%E5%83%8F/32.jpg\'}/>\n          <Avatar shape={\'square\'} name={\'lugia\'}/>\n          <Avatar shape={\'square\'} icon={\'lugia-icon-financial_user\'}/>\n        </Wrapper>\n      </Theme>);\n  }\n}\n"}</code>} desc={'可以选择三种风格的头像,可写文本,图标,图片资源'}  demo={<TypeAvatar />}></Demo><Demo title={'头像的尺寸'} titleID={'avatar-3'} code={<code>{ "/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Avatar, Badge, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  float: left;\n  margin-left: 50px;\n  text-align: center;\n  padding: 20px;\n`;\nexport default class ComboAvatar extends React.Component<any, any> {\n\n  render () {\n    const view = {\n      [ Widget.Avatar ]: {\n        color: \'white\',\n        backgroundColor: \'#cccccc\',\n        margin: 10\n      },\n      [ Widget.Badge ]: {\n        position: { right: 10, top: 5 }\n      },\n    };\n    const register = {\n      [ Widget.Badge ]: {\n        position: { right: 15, top: 8 }\n      },\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Badge dot={true}>\n            <Avatar shape={\'square\'} size={\'large\'} name={\'lugia\'}/>\n          </Badge>\n          <Theme config={view}>\n            <Theme config={register}>\n              <Badge dot={true}>\n                <Avatar icon={\'lugia-icon-financial_user\'} size={\'large\'}/>\n              </Badge>\n            </Theme>\n            <br/>\n            <Badge count={10}>\n              <Avatar shape={\'square\'} size={\'large\'} name={\'lugia\'}/>\n            </Badge>\n            <Badge viewClass=\"register\" count={10}>\n              <Avatar icon={\'lugia-icon-financial_user\'} size={\'large\'}/>\n            </Badge>\n          </Theme>\n        </Wrapper>\n      </Theme>);\n  }\n}\n"}</code>} desc={'可以和徽标一块组合显示'}  demo={<ComboAvatar />}></Demo>
                            <EditTables dataSource={avatar} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'头像的形状'} href={'#avatar-0'} /><Link title={'头像的尺寸'} href={'#avatar-1'} /><Link title={'头像风格'} href={'#avatar-2'} /><Link title={'头像的尺寸'} href={'#avatar-3'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         }   
        