var assert = require('assert');
const request = require('supertest');

describe('basic tests', function () {
    var server;
    beforeEach(function () {
        server = require('./../index.js');
    });
    afterEach(function () {
        server.close();
    });
    it('responds to /', function testSlash(done) {
    request(server)
        .get('/')
        .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request(server)
        .get('/foo/bar')
        .expect(404, done);
    });
    it('add A', function testPath(done) {
        request(server)
        .get('/editCart?id=A&add=true')
        .expect("2.00", done);
    });
    it('remove A', function testPath(done) {
        request(server)
        .get('/editCart?id=A&add=false')
        .expect("0.00", done);
    });
    it('add B', function testPath(done) {
        request(server)
        .get('/editCart?id=B&add=true')
        .expect("12.00", done);
    });
    it('remove B', function testPath(done) {
        request(server)
        .get('/editCart?id=B&add=false')
        .expect("0.00", done);
    });
    it('add C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=true')
        .expect("1.25", done);
    });
    it('remove C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=false')
        .expect("0.00", done);
    });
    it('add D', function testPath(done) {
        request(server)
        .get('/editCart?id=D&add=true')
        .expect("0.15", done);
    });
    it('remove D', function testPath(done) {
        request(server)
        .get('/editCart?id=D&add=false')
        .expect("0.00", done);
    });
});

describe('compound test: ABCD', function () {
    var server;
    beforeEach(function () {
        server = require('./../index.js');
    });
    afterEach(function () {
        server.close();
    });
    it('add A', function testPath(done) {
        request(server)
        .get('/editCart?id=A&add=true')
        .expect("2.00", done);
    });
    it('add B', function testPath(done) {
        request(server)
        .get('/editCart?id=B&add=true')
        .expect("14.00", done);
    });
    it('add C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=true')
        .expect("15.25", done);
    });
    it('add D', function testPath(done) {
        request(server)
        .get('/editCart?id=D&add=true')
        .expect("15.40", done);
    });
});

describe('compound test: ABCDABAA', function () {
    var server;
    beforeEach(function () {
        server = require('./../index.js');
    });
    afterEach(function () {
        server.close();
    });
    it('clear cart', function clear(done) {
        request(server)
        .get('/clearCart')
        .expect("0.00", done);
    });
    it('add A', function testPath(done) {
        request(server)
        .get('/editCart?id=A&add=true')
        .expect("2.00", done);
    });
    it('add B', function testPath(done) {
        request(server)
        .get('/editCart?id=B&add=true')
        .expect("14.00", done);
    });
    it('add C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=true')
        .expect("15.25", done);
    });
    it('add D', function testPath(done) {
        request(server)
        .get('/editCart?id=D&add=true')
        .expect("15.40", done);
    });
    it('add A', function testPath(done) {
        request(server)
        .get('/editCart?id=A&add=true')
        .expect("17.40", done);
    });
    it('add B', function testPath(done) {
        request(server)
        .get('/editCart?id=B&add=true')
        .expect("29.40", done);
    });
    it('add A', function testPath(done) {
        request(server)
        .get('/editCart?id=A&add=true')
        .expect("31.40", done);
    });
    it('add A', function testPath(done) {
        request(server)
        .get('/editCart?id=A&add=true')
        .expect("32.40", done);
    });
});

describe('compound test: CCCCCCC', function () {
    var server;
    beforeEach(function () {
        server = require('./../index.js');
    });
    afterEach(function () {
        server.close();
    });
    it('clear cart', function clear(done) {
        request(server)
        .get('/clearCart')
        .expect("0.00", done);
    });
    it('add C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=true')
        .expect("1.25", done);
    });
    it('add C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=true')
        .expect("2.50", done);
    });
    it('add C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=true')
        .expect("3.75", done);
    });
    it('add C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=true')
        .expect("5.00", done);
    });
    it('add C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=true')
        .expect("6.25", done);
    });
    it('add C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=true')
        .expect("6.00", done);
    });
    it('add C', function testPath(done) {
        request(server)
        .get('/editCart?id=C&add=true')
        .expect("7.25", done);
    });
});

