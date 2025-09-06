import { Oid } from 'https://cdn.jsdelivr.net/npm/@mundorum/collections@0.3.0/full.js'
// import { Oid } from '@mundorum/oid/oid.js'

Oid.customize('oid:rest', {
  cid: 'cancer-predictor',
  api: {
    oas: {
      paths: {
        'http://127.0.0.1:8000/train?train_path={train_path}&test_path={test_path}': {
          'post': {
            operationId: 'train',
            parameters: [
              {name: 'train_path',
               in: 'path'
              },
              {name: 'test_path',
               in: 'path'
              }
            ]
          }
        },
        'http://127.0.0.1:8000/predict?radius_mean={radius_mean}&texture_mean={texture_mean}&symmetry_mean={symmetry_mean}&fractal_dimension_mean={fractal_dimension_mean}': {
          'get': {
            operationId: 'predict',
            parameters: [
              {name: 'radius_mean',
               in: 'path'
              },
              {name: 'texture_mean',
               in: 'path'
              },
              {name: 'symmetry_mean',
               in: 'path'
              },
              {name: 'fractal_dimension_mean',
               in: 'path'
              }
            ]
          }
        }
      }
    }
  }
})

Oid.customize('oid:rest', {
  cid: 'factory-predictor',
  api: {
    oas: {
      paths: {
        'http://127.0.0.1:8000/train': {
          'post': {
            operationId: 'train'
          }
        },
        'http://127.0.0.1:8000/inform_temperature?value={value}': {
          'post': {
            operationId: 'temperature',
            parameters: [
              {name: 'value',
               in: 'path'
              }
            ]
          }
        },
        'http://127.0.0.1:8000/inform_pressure?value={value}': {
          'post': {
            operationId: 'pressure',
            parameters: [
              {name: 'value',
               in: 'path'
              }
            ]
          }
        }
      }
    }
  }
})
