/*
 * @author: 冯伟
 * @description:
 */

export async function render(oldRender: Function) {
  try {
    oldRender();
  } catch (error) {
    console.log('error', error);
  }
}
