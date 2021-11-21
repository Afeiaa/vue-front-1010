import request from '@/utils/request'

export default {
  getPageList(page, limit, courseId) {
    return request({
      url: `/eduservice/indexcourse/getComment/${page}/${limit}`,
      method: 'get',
      params: {courseId}
    })
  },
  addComment(comment) {
    return request({
      url: `/eduservice/indexcourse/addComment`,
      method: 'post',
      data: comment
    })
  },

}