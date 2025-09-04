import httpInstance from "../utils/http.ts";

// 获取视界二级列表
export const getVisions = async (params: any = {}) => {
    const query = { level: 2, ...params };
    return httpInstance.request({
        method: "GET",
        url: "/visions",
        params: query,
    })
}

// 获取电影的所有影片
export const getAllMovies = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/movies",
        params,
    })
}

// 获取电视剧的所有影片
export const getAllTvSeries = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/tv",
        params,
    })
}

// 并行获取 电影 + 电视剧 列表
export const getMoviesAndTv = async (params: any = {}) => {
    const [moviesRes, tvRes] = await Promise.all([
        getAllMovies(params),
        getAllTvSeries(params),
    ])
    return { movies: moviesRes.data, tv: tvRes.data };
}

// 获取动漫的所有影片
export const getAllAnime = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/anime",
        params,
    })
}

// 获取动画的所有影片
export const getAllAnimation = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/animation",
        params,
    })
}

// 获取 动漫/动画的所有影片
export const getAllCartoons = async (params: any = {}) => {
    const [animeRes, animationRes] = await Promise.all([
        getAllAnime(params),
        getAllAnimation(params),
    ])
    return { anime: animeRes.data, animation: animationRes.data };
}

// 获取纪录片的所有影片
export const getAllDocs = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/docs",
        params,
    })
}

// 获取综艺的所有影片
export const getAllVariety = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/variety",
        params,
    })
}

// 获取纪录片/综艺的所有影片
export const getAllDocsAndVariety = async (params: any = {}) => {
    const [docsRes, varietyRes] = await Promise.all([
        getAllDocs(params),
        getAllVariety(params),
    ])
    return { docs: docsRes.data, variety: varietyRes.data };
}

// 获取单个影片详情
export const getVisionDetail = async (id: string | number) => {
    return httpInstance.request({
        method: "GET",
        url: `/visions/${id}`,
    })
}

// 搜索影片
export const searchVisions = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/search",
        params,
    })
}

// 获取热门影片
export const getHotVisions = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/hot",
        params,
    })
}

// 获取推荐影片
export const getRecommendedVisions = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/recommended",
        params,
    })
}

// 获取最新影片
export const getLatestVisions = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/latest",
        params,
    })
}

// 获取分类列表
export const getCategories = async () => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/categories",
    })
}

// 根据分类获取影片
export const getVisionsByCategory = async (categoryId: string | number, params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: `/visions/category/${categoryId}`,
        params,
    })
}

// 获取影片评论
export const getVisionComments = async (visionId: string | number, params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: `/visions/${visionId}/comments`,
        params,
    })
}

// 添加影片评论
export const addVisionComment = async (visionId: string | number, data: any) => {
    return httpInstance.request({
        method: "POST",
        url: `/visions/${visionId}/comments`,
        data,
    })
}

// 获取影片评分
export const getVisionRating = async (visionId: string | number) => {
    return httpInstance.request({
        method: "GET",
        url: `/visions/${visionId}/rating`,
    })
}

// 评分影片
export const rateVision = async (visionId: string | number, rating: number) => {
    return httpInstance.request({
        method: "POST",
        url: `/visions/${visionId}/rating`,
        data: { rating },
    })
}

// 收藏影片
export const favoriteVision = async (visionId: string | number) => {
    return httpInstance.request({
        method: "POST",
        url: `/visions/${visionId}/favorite`,
    })
}

// 取消收藏影片
export const unfavoriteVision = async (visionId: string | number) => {
    return httpInstance.request({
        method: "DELETE",
        url: `/visions/${visionId}/favorite`,
    })
}

// 获取收藏列表
export const getFavorites = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/favorites",
        params,
    })
}

// 获取观看历史
export const getWatchHistory = async (params: any = {}) => {
    return httpInstance.request({
        method: "GET",
        url: "/visions/history",
        params,
    })
}

// 记录观看历史
export const recordWatchHistory = async (visionId: string | number, progress: number) => {
    return httpInstance.request({
        method: "POST",
        url: `/visions/${visionId}/history`,
        data: { progress },
    })
}