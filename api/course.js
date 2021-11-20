import request from '@/utils/request'


export default {
  // 课程分页
  getPageList(page, limit, searchObj) {
    return request({
      url: `/eduservice/indexcourse/index/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },

  // 获取课程二级分类
  getNestedTreeList2() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  },

  // 课程详细信息
  getById(courseId) {
    return request({
        url: `/eduservice/indexcourse/courseInfo/${courseId}`,
        method: 'get'
    })
  },

  getPlayAuth(vid) {
    return request({
      url: `/eduservice/indexcourse/getPlayAuth/${vid}`,
      method: 'get'
    })
  }

}