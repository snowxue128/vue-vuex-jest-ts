import { AppState } from '../state/types';
import { MutationType } from './types';
// 删除英雄
export const delHero: MutationType = (state: AppState, index: number): void => {
  state.heroesData.splice(index, 1);
};
// 添加英雄
export const addHero: MutationType = (state: AppState, heroName: string): void => {
  state.index++;
  if (heroName !== '') {
    state.heroesData.push({ id: state.index, name: heroName });
  }

};
// 获取英雄名字，输入input框
export const getHero: MutationType = (state: AppState, id: number): void => {
  const currentHero = state.heroesData.filter((item) => {
    return item.id === id;
  });
  state.heroName = currentHero[0].name;
};
// 修改英雄名字
export const updateName: MutationType = (state: AppState, idAndName: any): void => {
  const arrData = state.heroesData.map((obj: any) => {
    if (obj.id === idAndName.id) {
      return idAndName;
    } else {
      return obj;
    }
  });
  state.heroesData = arrData;
  state.topHero = arrData.slice(0, 4);
};
// 清除查询信息
export const clearMsg: MutationType = (state: AppState): void => {
  state.msgTag = false;
  state.messages = [];
};

// 添加查询日志
export const logMsg: MutationType = (state: AppState, messageStr: string): void => {
  state.messages.push(messageStr);
};

// 添加搜索记录
export const saveRecord: MutationType = (state: AppState, recordStr: string): void => {
  if (state.searchRecord.length === 0) {
    state.searchRecord.push(recordStr);
  } else {
    state.searchRecord.map((val: string) => {
      if (val.toUpperCase().indexOf(recordStr.toUpperCase()) === -1) {
        state.messages.push(recordStr);
      }
    });
  }
};

export const clearTag: MutationType = (state: AppState): void => {
  state.msgTag = true;
};


