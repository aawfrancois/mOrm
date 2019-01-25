import Entity from "./entity"

export default class Note extends Entity {
    static meta() {
      return {
        name: 'Project',
        columns: {
          id: {
            primary: true,
            type: 'int',
            generated: true
          },
          name: {
            type: 'string'
          }
        }
      }
    }
  }