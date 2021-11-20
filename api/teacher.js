import request from '@/utils/request'

export default {
  getPageList(page, limit) {   
    return request({
      url: `/eduservice/indexteacher/index/${page}/${limit}`,
      method: 'get'
    })
  },

  getById(teacherId) {
    return request({
        url: `/eduservice/indexteacher/teacherInfo/${teacherId}`,
        method: 'get'
    })
  }   
}