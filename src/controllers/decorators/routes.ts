import 'reflect-metadata'
import { MetadataKeys } from './MetadataKeys'
import { Methods } from './Methods'

function routeBinder(method: string){
    return function (path: string){
        return function(target:any, key: string, desc: PropertyDescriptor): void{
            Reflect.defineMetadata(MetadataKeys.path, path, target, key)
            Reflect.defineMetadata(MetadataKeys.method, method, target, key)
        }
    }
}

export const get = routeBinder(Methods.get)
export const post = routeBinder(Methods.post)
export const put = routeBinder(Methods.put)
export const patch = routeBinder(Methods.patch)
export const del = routeBinder(Methods.del)