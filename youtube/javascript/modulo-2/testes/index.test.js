import assert from 'assert';
import Product from './product.js';
import Service from './service.js';

const callTracker = new assert.CallTracker();

// quando o programa terminar, verifica todas as chamadas.
process.on('exit', () => callTracker.verify());

// should throw an error when description is less than 5 seconds long
{
    const params = {
        description: 'my',
        id: 1,
        price: 1000
    };

    const product = new Product({
        onCreate: () => {},
        service: new Service()
    });

    assert.rejects(
        () => product.create(params),
        { message: 'Description must be higher than 5.' },
        'it should throw an error with wrong description'
    );
}

// should save product successfully
{
    // MOCK
    const params = {
        description: 'my product',
        id: 1,
        price: 1000
    };

    // STUB
    const spySave = callTracker.calls(1);
    const serviceStub = {
        async save(params) {
            spySave(params);
            return `${params.id} saved with success.`;
        }
    };

    const fn = (msg) => {
        assert.deepStrictEqual(msg.id, params.id, 'id should be the same.');
        assert.deepStrictEqual(msg.price, params.price, 'id should be the same.');
        assert.deepStrictEqual(msg.description, params.description.toUpperCase(), 'id should be the same.');
    };
    const spyOnCreate = callTracker.calls(fn, 1);
    const product = new Product({
        onCreate: spyOnCreate,
        service: serviceStub
    });

    const result = await product.create(params);
    assert.deepStrictEqual(result, `${params.id} SAVED WITH SUCCESS.`);
}
