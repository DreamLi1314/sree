import { Type } from '@angular/core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import _ from 'lodash';

// const _ = require("lodash");

export namespace Tool {
  /**
   * 判断对象是否相等
   * @param obj0 待判断的对象1
   * @param obj1 待判断的对象2
   * @returns {boolean} true: 表示 obj0 与 obj1 相等, 反之, 返回 false
   */
   export function isEquals(obj0: any, obj1: any): boolean {
      return _.isEqual(obj0, obj1);
   }

  /**
   * 深克隆一个对象
   * @param obj 要克隆的对象
   * @returns {any} obj 的副本
   */
   export function clone(obj: any): any {
      return _.cloneDeep(obj);
   }

  /**
   * 判断一个对象是否为空
   * @param obj
   * @returns {boolean}
   */
   export function isEmpty(obj: any): boolean {
      return _.isEmpty(obj);
   }

  /**
    * Shows a modal dialog.
    *
    * @param modalService  the modal service used to open the modal
    * @param dialogType    the type of the dialog content component.
    * @param options       the modal options.
    * @param onCommit      the handler for the on commit event.
    * @param onCancel      the handler for the on cancel event.
    * @param commitEmitter the name of the emitter of the on commit event.
    * @param cancelEmitter the name of the emitter of the on cancel event.
    *
    * @returns the dialog content component.
    */
   export function showDialog<D>(modalService: any,
                                 dialogType: Type<D>,
                                 onCommit: (value: any) => any,
                                 options: NgbModalOptions = {},
                                 onCancel: (value: any) => any = () => {},
                                 commitEmitter: string = "onCommit",
                                 cancelEmitter: string = "onCancel",
                                 applyEmitter: string = "onApply"): D
   {

      return null;
   }
}
