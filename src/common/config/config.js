'use strict';
/**
 * config
 */
export default {
  //key: value
    port:8088,
    default_module:"home",
    resource_on: true, //�Ƿ�����̬��Դ��������
    resource_reg: /^(static\/|[^\/]+\.(?!js|html)\w+$)/, //�ж�Ϊ��̬��Դ���������
};