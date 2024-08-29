const assert = require('assert');
const {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
} = require('./main.js');

describe('isAdmin', () => {
    it('returns true if the user is an admin', () => {
        assert.strictEqual(isAdmin({
            firstName: 'Eileen',
            lastName: 'Smith',
            userRole: 'REGULAR_USER'
        }), false);

        assert.strictEqual(isAdmin({
            firstName: 'Ian',
            lastName: 'Rogers',
            userRole: 'USER_MANAGER'
        }), false);

        assert.strictEqual(isAdmin({
            firstName: 'Jeff',
            lastName: 'Wilson',
            userRole: 'ADMIN'
        }), true);
    });
});

describe('getEmail', () => {
    it('returns an email from a user object', () => {
        assert.strictEqual(getEmail({
            firstName: 'Kyle',
            lastName: 'Rose'
        }), 'krose.prsvr@gmail.com');

        assert.strictEqual(getEmail({
            firstName: 'Jason',
            lastName: 'Doty'
        }), 'jdoty.prsvr@gmail.com');

        assert.strictEqual(getEmail({
            firstName: 'John',
            lastName: 'Doe'
        }), 'jdoe.prsvr@gmail.com');
    });
});

describe('getPlaylistLength', () => {
    it('returns the length of the given playlist', () => {
        assert.strictEqual(getPlaylistLength({
            name: 'playlist 1',
            songs: ['song1', 'song2', 'song3']
        }), 3);

        assert.strictEqual(getPlaylistLength({
            name: 'playlist 2',
            songs: ['song4', 'song3']
        }), 2);

        assert.strictEqual(getPlaylistLength({
            name: 'playlist 3',
            songs: []
        }), 0);
    });
});

describe('getHardestHomework', () => {
    it('returns the name of hardest homework', () => {
        assert.strictEqual(getHardestHomework([
            { name: 'homework 1', averageScore: 50 }
        ]), 'homework 1');

        assert.strictEqual(getHardestHomework([
            { name: 'hip-hip-array', averageScore: 20 },
            { name: 'wait-i-object', averageScore: 50 }
        ]), 'hip-hip-array');

        assert.strictEqual(getHardestHomework([
            { name: 'some hw', averageScore: 99 },
            { name: 'other hw', averageScore: 20 },
            { name: 'third hw', averageScore: 3 }
        ]), 'third hw');
    });

    it('should return an empty string if given an empty array', () => {
        assert.strictEqual(getHardestHomework([]), '');
    });
});

describe('createPhonebook', () => {
    it('creates a phonebook from two arrays', () => {
        assert.deepStrictEqual(createPhonebook(
            ['Jimothy', 'Maria', 'Karl'],
            ['123-456-7890', '000-000-0000', '999-888-7766'],
        ), {
            'Jimothy': '123-456-7890',
            'Maria': '000-000-0000',
            'Karl': '999-888-7766'
        });

        assert.deepStrictEqual(createPhonebook(
            ['Melissa', 'Andre'],
            ['206-111-2233', '321-123-2424']
        ), {
            'Melissa': '206-111-2233',
            'Andre': '321-123-2424'
        });

        assert.deepStrictEqual(createPhonebook([], []), {});
    });
});
